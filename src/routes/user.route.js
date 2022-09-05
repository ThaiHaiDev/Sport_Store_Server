const express = require('express')
const router = express.Router()

const userController = require('../app/controller/userController');
const checkToken = require('../middlewares/checkToken');

// Get All Users 
router.get('/', checkToken.verifyTokenAdmin, userController.getAllUsers)

// Get A User 
router.get('/:id', checkToken.verifyTokenAdmin, userController.getAUser)

// Add User
router.post('/', checkToken.verifyTokenAdmin, userController.addUser)

// Delete User By Id Params
router.delete('/:id', checkToken.verifyTokenAdminDelete, userController.deleteUserWithParams)

// Delete User By Id Body
router.delete('/', checkToken.verifyTokenAdminDelete, userController.deleteUserWithBody)

// Update A User 
router.put('/:id', checkToken.verifyTokenAdminUpdate, userController.updateUser)

module.exports = router