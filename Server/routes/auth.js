const express = require("express");
const router = express.Router();
const IsLogin = require("../middleware/checkLogin");
const {
  userRegister,
  userLogin,
  userDetails,
} = require("../controller/auth.js");

// Register User Route.
router.post("/userregister", userRegister);

// Login User Route.
router.post("/userlogin", userLogin);

router.post("/userinfo/:userId", IsLogin, userDetails);

module.exports = router;
