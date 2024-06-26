const crypto = require("crypto");
const { initializeApp } = require("firebase/app");
const {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} = require("firebase/storage");
const path = require("path");
const Property = require("../models/property");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const firebaseConfig = require("../utils/firebase");
const {
  ValidateCreateListingSchema,
  ValidateUpdateListingSchema,
} = require("../utils/formValidation");

module.exports.CreateListing = catchAsync(async (req, res, next) => {
  const { error, value } = ValidateCreateListingSchema(req.body);
  if (error) {
    return next(new AppError(error.message, 400));
  }

  const name = value.name;
  const nameExist = await Property.findOne({ name });
  if (nameExist) {
    return next(new AppError(`Listing with name ${name} already exist`, 400));
  }
  const file = req.file;
  const filename =
    crypto.randomBytes(16).toString("hex") + path.extname(file.originalname);
  initializeApp(firebaseConfig);

  const storage = getStorage();

  const metadata = {
    contentType: req.file.mimetype,
  };
  const storageRef = ref(storage, filename);
  const snapshot = await uploadBytesResumable(
    storageRef,
    file.buffer,
    metadata
  );

  const downloadURL = await getDownloadURL(snapshot.ref);

  const createdProduct = await Property.create({
    name: value.name,
    description: value.description,
    imageUrls: downloadURL,
    address: value.address,
    location: value.location,
    property_type: value.property_type,
    price: value.price,
  });
  res.status(201).json({
    status: "ok",
    success: true,
    message: "Listing created successfully",
    listing: createdProduct,
  });
});

module.exports.UpdateListing = catchAsync(async (req, res, next) => {
  const { error, value } = ValidateUpdateListingSchema(req.body);
  if (error) {
    return next(new AppError(error.message, 400));
  }
  //Checks for the listing and if user owns the listing on one DB request
  const updatedListing = await Property.findOneAndUpdate(
    { _id: req.params.id, poster: req.cookie.user_auth },
    {
      $set: {
        name: value.name,
        description: value.description,
        address: value.address,
        property_type: value.property_type,
        type: value.type,
        price: value.price,
        years: value.years,
      },
    },
    { new: true }
  );
  if (!updatedListing) {
    return next(
      new AppError(
        `Listing with ID : ${req.params.id} and name : ${value.name} not found or you are not allowed to update this listing `,
        403
      )
    );
  }
  res.status(200).json({
    status: "ok",
    success: true,
    message: "Listing updated successfully",
    listing: updatedListing,
  });
});
module.exports.DeleteListing = catchAsync(async (req, res, next) => {
  const deletedListing = await Property.findOneAndDelete({
    _id: req.params.id,
  });
  if (!deletedListing) {
    return next(
      new AppError(
        `Listing with ID : ${req.params.id} not found or you are not allowed to delete this listing `,
        403
      )
    );
  }
  res.status(200).json({
    status: "ok",
    success: true,
    message: "Listing has been deleted succesfully",
  });
});
module.exports.AboutListingDetails = catchAsync(async (req, res, next) => {
  const listing_details = await Property.findOne({ _id: req.params.id });
  if (!listing_details) {
    return next(
      new AppError(`Listing with ID : ${req.params.id}  not found`, 403)
    );
  }
  res.status(200).json({
    status: "ok",
    success: true,
    message: "Listing details has beeen fetched succesfully",
    listing_details: listing_details,
  });
});

module.exports.GetHomePageListing = catchAsync(async (req, res, next) => {
  const { limit } = req.query;
  const home_product = await Property.find().limit(limit || 6);
  if (home_product.length == 0) {
    return next(new AppError("No product has been found", 401));
  }
  res.status(200).json({
    status: "ok",
    success: true,
    message: "Home product fetched successfully",
    product: home_product,
  });
});
module.exports.SearchResultListing = catchAsync(async (req, res, next) => {
  const { searchTerm } = req.query;
  if (searchTerm == "" || undefined) {
    next(new AppError("Search term should not be empty", 401));
  }
  const found_product = await Property.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  if (found_product == 0) {
    return res.json({ text: searchTerm, message: "No product found" });
  }
  res.status(200).json({
    status: "ok",
    success: true,
    message: "Product found successfully",
    text: searchTerm,
    products: found_product,
  });
});
module.exports.SearchListingByLocation = catchAsync(async (req, res, next) => {
  const { searchTerm } = req.query;
  if (searchTerm == "" || undefined) {
    next(new AppError("Location must be provided", 401));
  }
  const found_product = await Property.find({
    location: { $regex: searchTerm, $options: "i" },
  });
  if (found_product.length == 0) {
    return res.json({
      text: searchTerm,
      message: `No property found in ${searchTerm}`,
    });
  }
  res.status(200).json({
    status: "ok",
    success: true,
    message: "Product found successfully",
    text: searchTerm,
    products: found_product,
  });
});
module.exports.GetStoreListing = catchAsync(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = req.query.limit || 6;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};
  if (endIndex < (await Property.countDocuments().exec())) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  results.results = await Property.find().limit(limit).skip(startIndex).exec();
  res.status(200).json({
    status: "ok",
    success: true,
    message: "Product fetched successfully",
    results: results,
  });
});
