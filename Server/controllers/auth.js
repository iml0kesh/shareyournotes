const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const auth = require("../middleware/checkLogin")

// ------------------------------------------------------------------------
// Function for User Registration.

// Need to implement Validate Functions

const userRegister = async (req, res) => {
  try {
    const { userName, userId, userEmail, userPassword } = req.body;
    if (!userName || !userId || !userEmail || !userPassword) {
      res.status(400).json({ msg: "Bro give all data" });
    }

    // SALT OF THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(userPassword, salt);

    const newUser = new User({
      userName,
      userId,
      userEmail,
      userPassword: passwordHash,
    });

    await newUser.save();

    const auth_token = jwt.sign(userId, process.env.JWT_SECRET);
    res.header("x-auth-token", auth_token).status(201).json({ auth_token });

    // res.status(201).json({ auth_token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "bro something went wrong", err: err });
  }
};

// -------------------------------------------------------------------------
// Function to Check User Login

const userLogin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    if (!userEmail || !userPassword) {
      res.status(500).json("Give all fields bro");
    }

    // Searching for userEmail from DB. (if not exist create new account.)
    const user = await User.findOne({ userEmail: userEmail });
    if (!user) {
      res.status(400).json("Bro Broke!");
    }

    // Checking for Right Password.
    const comparePass = await bcrypt.compare(userPassword, user.userPassword);
    if (!comparePass) {
      res.status(400).json("Bro wrong pass myan");
    }

    // Space for Token Generation
    const auth_token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    delete user.userPassword;

    res.status(200).json({ msg: "Bro login success", auth_token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const userDetails = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ userId: userId });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  userRegister,
  userLogin,
  userDetails,
};
