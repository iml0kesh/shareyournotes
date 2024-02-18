const express = require("express");
const router = express.Router();
const IsLogin = require("../middleware/checkLogin");

const {
  userRegister,
  userLogin,
  userDetails,
} = require("../controllers/auth.js");

// Register User Route.
router.post("/user_register", userRegister);

// Login User Route.
router.post("/user_login", userLogin);

// Get User Details
router.post("/user_info", IsLogin, userDetails);

module.exports = router;
