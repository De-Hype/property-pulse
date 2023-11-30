const { SignUp, SignIn, SignOut } = require("../controllers/authController");
const Limiter = require("../utils/rateLimit");

const router = require("express").Router();

router.post('/register', Limiter, SignUp );
router.get('/sign-in', Limiter, SignIn);
router.get('/sign-out', Limiter, SignOut);


module.exports = router;
