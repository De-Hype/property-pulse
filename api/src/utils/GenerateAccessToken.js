const jwt = require("jsonwebtoken");
require("dotenv").config();

const GenerateAccessToken = (user) => {
  const token = jwt.sign(user, process.env.JWT_ACCESS_KEY, {
    expiresIn: "6h ",
  });
  return token;
};
module.exports = GenerateAccessToken;
