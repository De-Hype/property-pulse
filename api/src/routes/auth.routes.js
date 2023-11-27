const { SignUp, SignIn, SignOut } = require("../controllers/authController");
const router = require("express").Router();

router.post('/register', SignUp );
router.get('/sign-in', SignIn);
router.get('/sign-out', SignOut);


module.exports = router;
