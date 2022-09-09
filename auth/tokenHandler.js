const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateAccessToken = user => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '72h' });
};

const generateRefreshToken = user => {
  return jwt.sign(user, process.env.JWT_REFRESH_SECRET, { expiresIn: '72h' });
};

const authorization = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.sendStatus(401);
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
  generateRefreshToken,
  authorization,
};
