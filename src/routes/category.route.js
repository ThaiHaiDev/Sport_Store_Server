const express = require('express')
const router = express.Router()

const categoryController = require('../app/controller/categoryController');
const checkToken = require('../middlewares/checkToken');

// Get All Categories
router.get('/', checkToken.verifyTokenAdmin, categoryController.getAllCategories)

// Get A Category 
router.get('/:slug', checkToken.verifyTokenAdmin, categoryController.getACategory)

// Add Category
router.post('/', checkToken.verifyTokenAdmin, categoryController.addCategory)

// Delete Category By Id Params
router.delete('/:id', checkToken.verifyTokenAdmin, categoryController.deleteCategoryWithParams)

// Delete Category By Id Body
router.delete('/', checkToken.verifyTokenAdmin, categoryController.deleteCategoryWithBody)

// Update A Category 
router.put('/:id', checkToken.verifyTokenAdmin, categoryController.updateCategory)

module.exports = router