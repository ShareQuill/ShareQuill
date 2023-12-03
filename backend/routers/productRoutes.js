const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/home/fetch/', productController.productsHomePage);

module.exports = router;
