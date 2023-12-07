const express = require('express');
const multer = require("multer");
const cors = require("cors");

const router = express.Router();
const productController = require('../controllers/productController');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/home/fetch/', productController.productsHomePage);
router.post('/specs/post/', productController.postSpecs);
router.post('/images/post/', upload.array("images"), productController.postImages);
router.get('/category/:category/', productController.filterCategory);

module.exports = router;
