const { SignUp, SignIn, SignOut, GoogleOauth } = require("../controllers/authController");
const Limiter = require("../utils/rateLimit");
// const passportSetup = require('../utils/Passport');

const router = require("express").Router();
const passport = require('passport');

router.post('/register', Limiter, SignUp );
router.get('/sign-in', Limiter, SignIn);
router.get('/sign-out', Limiter, SignOut);
router.get('/google', passport.authenticate('google', {
    scope:['profile']
}))
router.get('/google/redirect', GoogleOauth)


module.exports = router;
