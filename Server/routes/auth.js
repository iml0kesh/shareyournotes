const express = require("express");
const router = express.Router();

const { userRegister, userLogin } = require("../controller/auth.js");

// Register User Route.
router.post("/register", userRegister);

// Login User Route.
router.post("/userLogin", userLogin);
