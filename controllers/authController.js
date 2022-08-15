const tokenHandler = require("../auth/tokenHandler");
const bcrypt = require("bcrypt");
const userService = require("../services/userService");

const post_signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.getUserByEmail(email);
    if (user) {
      res.status(400).json({
        success: 0,
        message: "User with this email already exists",
      });
    } else {
      await userService.createUser(email, password);
      res.status(201).json({
        success: 1,
        message: "User signup successfuly",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: 0,
      message: "Something went wrong!",
    });
  }
};

const post_login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.getUserByEmail(email);
  if (await bcrypt.compare(password, user.Password)) {
    res.cookie("access_token", tokenHandler.generateAccessToken(user)).json({
      success: 1,
      message: "User logged in!",
    });
  } else {
    res.status(400).json({
      success: 0,
      message: "Email or Password is incorrect!",
    });
  }
};

module.exports = {
  post_signup,
  post_login,
};
