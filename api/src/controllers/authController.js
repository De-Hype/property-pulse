const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/user");
const AppError = require("../utils/AppError");
const { ValidateSignIn } = require("../utils/formValidation");
const GenerateAccessToken = require("../utils/GenerateAccessToken");

module.exports.SignUp = catchAsync(async (req, res, next) => {
  let { name, email, username, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser) {
    return next(new AppError("User already exist", 402));
  }
  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, salt);

  const createUser = await User({
    name,
    email,
    username,
    password: hashedPassword,
  });
  await createUser.save();
  return res.status(202).json({
    status: "ok",
    message: "User account created succesfully",
    createUser,
  });
});

module.exports.SignIn = catchAsync(async (req, res, next) => {
  const { error, value } = await ValidateSignIn(req.body);
  if (error) {
    return next(new AppError(error.message, 402));
  }
  const findUser = await User.findOne({ email: value.email });
  if (!findUser) {
    return next(new AppError("User does not exist", 402));
  }
  const isPasswordValid = await bcrypt.compare(
    value.password,
    findUser.password
  );
  if (!isPasswordValid) {
    return next(new AppError("Incorrect login details", 402));
  }
  const account = {
    id: findUser._id,
    name: findUser.name,
    username: findUser.username,
  };
  const accessToken = GenerateAccessToken(account);
  res
    .status(202)
    .json({
      status: "ok",
      message: "User succesfully logged in",
      account: account,
      accessToken:accessToken
    });
});

module.exports.SignOut = catchAsync(async (req, res, next) => {
  res.clearCookie("user_auth");
  res
    .status(202)
    .json({ status: "ok", message: "User succesfully logged out" });
});

module.exports.GoogleOauth = catchAsync(async (req, res, next) => {});

module.exports.GetAllUsers = catchAsync(async (req, res, next) => {
  const AllUsers = await Users.find().select("-password");
  if (AllUsers.length <= 0) {
    console.log(AllUsers.length);
    return next(new AppError("No users found", 404));
  }
  console.log(AllUsers.length);
  res.status(200).json({ status: "ok", success: true, AllUsers });
});

module.exports.GetUserDetails = catchAsync(async (req, res, next) => {
  const foundUser = await User.findOne({ _id: req.user.id });
  if (!foundUser) {
    return next(new AppError("User not found", 404));
  }
  res.status(200).json({ status: "ok", success: true, foundUser });
});
