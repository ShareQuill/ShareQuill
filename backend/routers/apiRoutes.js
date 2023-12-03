const express = require('express');

const router = express.Router();

const userRoutes = require('../routers/userRoutes');
const productRoutes = require('../routers/productRoutes');

router.use('/user', userRoutes);
router.use('/products', productRoutes);

module.exports = router;