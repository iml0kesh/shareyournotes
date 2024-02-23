const express = require("express");
const router = express.Router();
const Auth = require("../middleware/auth.js");

const {
  userRegister,
  userLogin,
  userVerify,
} = require("../controllers/userCtrl.js");

// Register User Route.
router.post("/register", userRegister);

// Login User Route.
router.post("/login", userLogin);

// Verify Login
router.get("/verify", userVerify);

module.exports = router;
