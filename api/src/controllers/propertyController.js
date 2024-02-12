const crypto = require("crypto");
const { initializeApp } = require("firebase/app");
const {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} = require("firebase/storage");
const Property = require("../models/property");
const User = require("../models/user");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const firebaseConfig = require("../utils/firebase");
const { ValidateCreateListingSchema } = require("../utils/formValidation");

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
  const createdProduct = await Property.create({
    name: value.name,
    description: value.description,
    imageUrls: value.firebase_url,
    address: value.address,
    property_type: value.property_type,
    type: value.type,
    price: value.price,
    years: value.years,
    user:req.body.user
  });

  res.status(201).json({
    status: "ok",
    success: true,
    message: "Listing created successfully",
    listing: createdProduct,
  });
});

module.exports.UploadImage = catchAsync(async (req, res, next) => {
  const file = req.file;
  const filename = crypto.randomBytes(16).toString("hex");
  initializeApp(firebaseConfig);
  const storage = getStorage();
  const metadata = {
    contentType: req.file.mimetype,
  };
  const storageRef = ref(storage, filename);
  const snapshot = await uploadBytesResumable(storageRef, file, metadata);
  const downloadURL = await getDownloadURL(snapshot.ref);
  res.status(200).json({
    status: "ok",
    success: true,
    photo_url: downloadURL,
    message: "Image stored on firebase successfully",
  });
});
module.exports.UpdateListing = catchAsync(async (req, res, next) => {
  const userExist = await User.findById({ _id: req.params.id });
});
module.exports.DeleteListing = catchAsync(async (req, res, next) => {
  const userExist = await User.findById({ _id: req.params.id });
});
module.exports.GetListingByUser = catchAsync(async (req, res, next) => {
  const userExist = await User.findById({ _id: req.params.id });

  if (!userExist) {
    next(new AppError("Invalid ID or user", 401));
  }
  if (userExist.property == null) {
    next(new AppError("User has no listing", 401));
  }
  await userExist.populate("Property");
  res.status(200).json({
    status: "ok",
    success: true,
    message: "Users listings fetched successfully",
    listings: userExist.property,
  });
});

module.exports.GetHomePageListing = catchAsync(async (req, res, next) => {
  const { limit } = req.query;
  const home_product = await Property.find().limit(limit);
  res.status(200).json({
    status: "ok",
    success: true,
    message: "Home product fetched successfully",
    product: home_product,
  });
});
module.exports.SearchResultListing = catchAsync(async (req, res, next) => {
  const { searchTerm } = req.body;
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
