const express = require('express')
const router = express.Router()

const authController = require('../app/controller/authController');
const checkToken = require('../middlewares/checkToken');

// Register User
router.post('/register', authController.registerUser)

// Login User
router.post('/login', authController.loginUser)

// Refresh Token
router.post('/refresh', authController.requestRefreshToken)

// logout
router.post('/logout', checkToken.verifyToken, authController.userLogout)

module.exports = router