const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Auth = require("../middleware/auth");

// ------------------------------------------------------------------------
// Function for User Registration.

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

    res.status(201).json({ msg: "Register Success" });
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
      res.status(400).json("Not registered!");
    }

    // Checking for Right Password.
    const comparePass = await bcrypt.compare(userPassword, user.userPassword);
    if (!comparePass) {
      res.status(400).json("Bro wrong pass");
    }

    // Space for Token Generation
    const activeToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    delete user.userPassword;

    res.status(200).json({ activeToken });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const userVerify = (req, res) => {
  try {
    const token = req.header("Authorization");
    console.log(token);
    if (!token) return res.send(false);

    jwt.verify(token, process.env.JWT_SECRET, async (err, verified) => {
      if (err) return res.send(false);

      const user = await User.findById(verified._id);
      if (!user) return res.send(false);

      return res.send(true);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  userRegister,
  userLogin,
  userVerify,
};
