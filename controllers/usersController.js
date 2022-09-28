const userService = require('../services/userService');

const signup = async (req, res) => {
  const { email, password } = req.body;
  // TODO: validate email and password
  try {
    const user = await userService.getUserByEmail(email);
    if (user) {
      res.status(400).json({
        success: 0,
        message: 'Invalid credentials',
      });
    } else {
      await userService.createUser(email, password);
      res.status(201).json({
        success: 1,
        message: 'User signup successfuly',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: 0,
      message: 'Something went wrong!',
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (user) {
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.set('Access-Control-Allow-Credentials', 'true');
      res.status(200).json(user);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signup,
  getAllUsers,
  getUserById,
};
