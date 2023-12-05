const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signupUser);
router.put('/edit', userController.editUser);
router.delete('/delete', userController.deleteUser);
router.post('/login', userController.loginUser);

module.exports = router;
