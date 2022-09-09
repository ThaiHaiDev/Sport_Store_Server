const express = require('express')
const router = express.Router()

const newOnTopController = require('../app/controller/newontop.controller');
const checkToken = require('../middlewares/checkToken');

// Get All News On Top
router.get('/', newOnTopController.getAllNewsOnTop)

// Add New On Top
router.post('/', checkToken.verifyTokenAdmin, newOnTopController.addNewOnTop)

module.exports = router