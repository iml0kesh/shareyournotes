import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// ------------------------------------------------------------------------
// Function for User Registration.

export const userRegister = async (req, res) => {
  try {
    const { userName, userId, userEmail, userPassword } = req.body;
    if (!userName || !userId || !userEmail || !userPassword) {
      return res.status(400).json({ msg: "Please enter all fields." });
    }

    const user = await User.findOne({ userEmail });

    if (user) {
      return res.status(400).json({ msg: "An account with this email already exists." });
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
    return res.status(500).json({ msg: "Server error during registration.", error: err.message });
  }
};

// -------------------------------------------------------------------------
// Function to Check User Login

export const userLogin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    if (!userEmail || !userPassword) {
      return res.status(400).json({ msg: "Please enter all fields." });
    }

    // Searching for userEmail from DB. (if not exist create new account.)
    const user = await User.findOne({ userEmail: userEmail });
    if (!user) {
      return res.status(400).json({ msg: "User with this email does not exist." });
    }

    // Checking for Right Password.
    const comparePass = await bcrypt.compare(userPassword, user.userPassword);
    if (!comparePass) {
      return res.status(400).json({ msg: "Invalid credentials." });
    }

    // Space for Token Generation
    const activeToken = jwt.sign(
      { userId: user.userId, id: user._id },
      process.env.JWT_SECRET
    );

    const userId = user.userId;

    res.status(200).json({ activeToken, userId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const userVerify = async (req, res) => {
  try {
    const token = req.header("activeToken");
    if (!token) return res.send(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.send(false);

    // Use the id from the token to find the user
    const user = await User.findById(verified.id);
    if (!user) return res.send(false);

    return res.send(true);
  } catch (error) {
    return res.send(false);
  }
};
