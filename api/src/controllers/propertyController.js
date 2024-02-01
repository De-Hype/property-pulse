const crypto = require("crypto");
const { initializeApp } = require("firebase/app");
const {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} = require("firebase/storage");
const property = require("../models/property");
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
  const { id } = req.params;
});
module.exports.DeleteListing = catchAsync(async (req, res, next) => {
  const { id } = req.params;
});
module.exports.GetListingByUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const userExist = await property.findById(id);
  if (userExist) {
    next(new AppError("Invalid ID or user", 401));
  }
  console.log(userExist);
});

module.exports.GetHomePageListing = catchAsync(async (req, res, next) => {
  const { id } = req.params;
});
module.exports.SearchResultListing = catchAsync(async (req, res, next) => {
  const {} = req.body;
});
