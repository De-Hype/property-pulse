const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
require("dotenv").config();

passport.use(
  new GoogleStrategy({
    //options for the strategy
    callbackURL:'/auth/google/redirect',
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
  }),
  () => {
    //passport cb functions
    console.log('Callback')
  }
);
