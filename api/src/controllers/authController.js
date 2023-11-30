const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const catchAsync = require("../utils/catchAsync");
const user = require("../models/user");
const AppError = require("../utils/AppError");

module.exports.SignUp = catchAsync(async (req, res, next) => {
  let { name, email, username, password } = req.body;
  const findUser = await user.findOne({ email });
  if (findUser) {
    next(new AppError("User already exist", 402));
  }
  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, salt);

  const createUser = await user({
    name,
    email,
    username,
    password: hashedPassword,
  });
  await createUser.save();

  return res.status(202).json({status:'ok', message:'User account created succesfully', createUser})
});

module.exports.SignIn = catchAsync(async (req, res, next) => {});

module.exports.SignOut = catchAsync(async (req, res, next) => {});

module.exports.GoogleOauth = catchAsync(async (req, res, next) => {});
