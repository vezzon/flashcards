const userTable = require('../models/userModel');
const bcrypt = require('bcrypt');
const id_email_passwd = ['id', 'email', 'password'];

const getUserById = async id => {
  try {
    const user = await userTable.findOne({
      where: { id: id },
      attributes: id_email_passwd,
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

const getUserByEmail = async email => {
  try {
    const user = await userTable.findOne({
      where: { email: email },
      attributes: id_email_passwd,
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async () => {
  try {
    const users = await userTable.findAll({ attributes: id_email_passwd });
    return users;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (email, password) => {
  try {
    const hash = await bcrypt.hash(password, 10);
    await userTable.create({ email: email, password: hash });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  getUserByEmail,
};
