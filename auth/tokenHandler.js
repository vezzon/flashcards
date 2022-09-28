const jwt = require('jsonwebtoken');
const tokenTable = require('../models/tokenModel');
require('dotenv').config();

//TODO: change expires time in tokens

const generateAccessToken = user => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '5s' });
};

const generateRefreshToken = user => {
  return jwt.sign(user, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
};

const refreshTokenExists = async refreshToken => {
  const dbToken = await tokenTable.findOne({ where: { token: refreshToken } });
  if (dbToken) {
    // TODO: Logic for revoking token
    return true;
  }
  return false;
};

const saveRefreshToken = async refreshToken => {
  try {
    await tokenTable.create({ token: refreshToken });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  refreshTokenExists,
  saveRefreshToken,
};
