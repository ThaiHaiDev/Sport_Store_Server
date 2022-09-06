const express = require('express')
const router = express.Router()

const productController = require('../app/controller/productController');
const checkToken = require('../middlewares/checkToken');

// Get All Categories
router.get('/', checkToken.verifyTokenAdmin, productController.getAllProducts)

// Get A product 
router.get('/:id', checkToken.verifyTokenAdmin, productController.getAProduct)

// Add product
router.post('/', checkToken.verifyTokenAdmin, productController.addProduct)

// Update A Product
router.put('/:id', checkToken.verifyTokenAdminUpdate, productController.updateProduct)

// Delete Product By Id Params
router.delete('/:id', checkToken.verifyTokenAdmin, productController.deleteProductWithParams)


module.exports = router