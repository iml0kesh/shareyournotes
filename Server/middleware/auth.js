import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const auth_token = req.header("activeToken");
    if (!auth_token)
      return res.status(401).json({ msg: "No authentication token, authorization denied." });

    const data = jwt.verify(auth_token, process.env.JWT_SECRET);
    if (!data.userId)
      return res.status(401).json({ msg: "Token is not valid." });

    req.user = data;
    next();
  } catch (error) {
    // If token is expired or invalid, jwt.verify throws an error
    res.status(401).json({ msg: "Token is not valid.", error: error.message });
  }
};

export default auth;
