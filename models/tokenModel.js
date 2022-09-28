const { DataTypes } = require('sequelize');
const db = require('../configs/database');

const Token = db.define('token', {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // user_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
});

module.exports = Token;
