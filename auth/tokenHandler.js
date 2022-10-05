const jwt = require('jsonwebtoken');
require('dotenv').config();

//TODO: change expires time in tokens

const generateAccessToken = user => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '5s' });
};

const generateRefreshToken = user => {
  return jwt.sign(user, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
