const express = require("express");
const router = express.Router();

const { userRegister, userLogin } = require("../controller/auth.js");

// Register User Route.
router.post("/userregister", userRegister);

// Login User Route.
router.post("/userlogin", userLogin);

module.exports = router;
