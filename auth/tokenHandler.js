const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "4h" });
};

const authorization = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

module.exports = {
  generateAccessToken,
  authorization,
};
