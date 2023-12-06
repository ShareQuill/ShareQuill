const express = require('express');

const router = express.Router();

const userRoutes = require('../routers/userRoutes');
const productRoutes = require('../routers/productRoutes');
const stripeRoutes = require('../routers/stripeRoutes');

router.use('/user', userRoutes);
router.use('/products', productRoutes);
router.use('/stripe', stripeRoutes);

module.exports = router;