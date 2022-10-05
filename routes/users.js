const express = require('express');
const userController = require('../controllers/usersController');

const router = express.Router();

router.get('/', userController.getAllUsers);
// router.get('/:id', userController.getUserById);
router.post('/signup', userController.signup);

module.exports = router;
