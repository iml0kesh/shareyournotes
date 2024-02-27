const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const auth_token = req.header("activeToken");
    if (!auth_token) return res.status(401).json("BRO GO AWAY! No Token");

    const data = jwt.verify(auth_token, process.env.JWT_SECRET);
    req.body.userId = data.userId;
    req.user = data;
    next();
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Bro something went wrong", error: error.stack });
  }
};

module.exports = auth;
