const bcrypt = require("bycrypt");
const User = require("../models/userModel");

const userRegister = async (req, res) => {
  try {
    const { userName, userId, userEmail, userPassword } = req.body;
    if (!userName || !userId || !userEmail || !userPassword) {
      res.status(400).json({ msg: "Bro give all data" });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      userName,
      userId,
      userEmail,
      userPassword: passwordHash,
    });
    const savedUser = newUser.save();
    res.status(201).json({ savedUser });
  } catch (err) {
    res.status(500).json({ msg: "bro something went wrong" });
  }
};

module.exports = {
  userRegister,
};
