const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const myNotes = async (req, res, next) => {
  try {
    const token = req.header("activeToken");
    if (!token) return res.send("no Token");

    const data = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ userId: data.userId }); // Use findOne instead of find
    req.user = { userId: user.userId }; // Set req.user as an object
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = myNotes;
