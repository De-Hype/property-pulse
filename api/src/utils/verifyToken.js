const jwt = require("jsonwebtoken");
const AppError = require("./AppError");
require("dotenv").config();

function VerifyToken(req, res, next) {
  const token = req.headers.authorization.split("")[1];
  if (!token) return next(new AppError("No token provided", 401));
  jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, decoded) => {
    if(err) return next(new AppError("Incorrect or expired token, please log in", 401))
    req.user = decoded;
    next();
  });
}

module.exports = VerifyToken;
