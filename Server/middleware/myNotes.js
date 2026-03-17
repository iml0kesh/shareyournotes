import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const myNotes = async (req, res, next) => {
  try {
    const token = req.header("activeToken");
    if (!token) return res.status(401).json({ msg: "No token, authorization denied." });

    const data = jwt.verify(token, process.env.JWT_SECRET);
    // Assuming JWT payload has userId
    const user = await User.findOne({ userId: data.userId });
    if (!user) {
      return res.status(401).json({ msg: "User not found, authorization denied." });
    }
    req.user = { userId: user.userId }; // Set req.user as an object
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ msg: "Invalid token" });
  }
};

export default myNotes;
