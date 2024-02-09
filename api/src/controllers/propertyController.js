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

module.exports.CreateListing = catchAsync(async (req, res, next) => {
  const {} = req.body;

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
  const userExist = await user.findById({_id: req.params.id}).select("-password");
});
module.exports.DeleteListing = catchAsync(async (req, res, next) => {
  const userExist = await user.findById({_id: req.params.id}).select("-password");
});
module.exports.GetListingByUser = catchAsync(async (req, res, next) => {
  const userExist = await user.findById({_id: req.params.id}).select("-password");
  if (!userExist) {
    next(new AppError("Invalid ID or user", 401));
  }
   if (userExist.property == null){
    next(new AppError("User has no listing", 401));
   }
   await userExist.populate('Property');
  res.status(200).json({
    status: "ok",
    success: true,
    message: "Image stored on firebase successfully",
    listings:userExist.property
  });
  
});

module.exports.GetHomePageListing = catchAsync(async (req, res, next) => {
  const { limit } = req.query;
  const home_product = await Property.find().limit(limit);
  res.status(200).json({
    status: "ok",
    success: true,
    message: "Home product fetched successfully",
    product:home_product
  });
});
module.exports.SearchResultListing = catchAsync(async (req, res, next) => {
  const {} = req.body;
});
