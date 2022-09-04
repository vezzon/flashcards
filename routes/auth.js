const express = require('express');
const authController = require('../controllers/authController');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// TODO ADD VALIDATOR

router.post('/signup', authController.post_signup);
router.post('/login', authController.post_login);

module.exports = router;
