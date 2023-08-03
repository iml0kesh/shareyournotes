const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const userRegister = async (req, res) => {
  try {
    const { userName, userId, userEmail, userPassword } = req.body;
    if (!userName || !userId || !userEmail || !userPassword) {
      res.status(400).json({ msg: "Bro give all data" });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(userPassword, salt);
    const newUser = new User({
      userName,
      userId,
      userEmail,
      userPassword: passwordHash,
    });
    const savedUser = await newUser.save();
    res.status(201).json({ savedUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "bro something went wrong", err: err });
  }
};

const userLogin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    if (!userEmail || !userPassword) {
      res.status(500).json("Give all fields bro");
    }
    const user = await User.findOne({ userEmail: userEmail });
    if (!user) {
      res.status(400).json("Bro make a account");
    }
    const comparePass = await bcrypt.compare(userPassword, user.userPassword);
    if (!comparePass) {
      res.status(400).json("Bro wrong pass myan");
    }
    
    // Space for Token Generation

    delete user.userPassword;
    res.status(200).json({ msg: "Bro login success", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  userRegister,
  userLogin,
};
