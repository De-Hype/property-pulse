const property = require("../models/property");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

module.exports.CreateListing = catchAsync(async (req, res, next) => {

});
module.exports.GetListingByUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const userExist = await property.findById(id);
  if (userExist) {
    next(new AppError("Invalid ID or user", 401));
  }
  console.log(userExist)
});
