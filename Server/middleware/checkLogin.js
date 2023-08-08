const jwt = require("jsonwebtoken");

const IsLogin = (req, res, next) => {
  try {
    // GET THE USER FROM
    const authtoken = req.header("authtoken");
    if (!authtoken) {
      res.status(401).json("BRO GO AWAY!");
    }
    const data = jwt.verify(authtoken, process.env.JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Bro somwthing went wrong", error: error.stack });
  }
};

module.exports = IsLogin;
