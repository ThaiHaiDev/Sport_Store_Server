const express = require('express')
const router = express.Router()

const authController = require('../app/controller/authController');
const checkToken = require('../middlewares/checkToken')

// Register User
router.post('/v1/register', authController.registerUser)

// Login User
router.post('/v1/login', authController.loginUser)

// Refresh Token
router.post('/v1/refresh', authController.requestRefreshToken)

// logout
router.post('/v1/logout', checkToken.verifyToken, authController.userLogout)

module.exports = router