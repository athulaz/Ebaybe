// routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// User registration route
router.post('/register', registerUser);

// User login route (now uses loginUser function from the controller)
router.post('/login', loginUser);

module.exports = router;
