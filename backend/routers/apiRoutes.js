const express = require('express');

const router = express.Router();

const userRoutes = require('../routers/userRoutes');
const productRoutes = require('../routers/productRoutes');
const chatRoutes = require('../routers/chatRoutes');

router.use('/user', userRoutes);
router.use('/products', productRoutes);
router.use('/chat', chatRoutes);

module.exports = router;