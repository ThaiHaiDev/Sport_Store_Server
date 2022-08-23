const express = require('express')
const router = express.Router()

const userController = require('../app/controller/userController');
const checkToken = require('../middlewares/checkToken');

// Get All Users 
router.get('/', checkToken.verifyToken, userController.getAllUsers)

// Delete User 
router.delete('/:id', checkToken.verifyTokenAdmin, userController.deleteUser)

module.exports = router