// routes/adminRoutes.js
const express = require('express');
const { getAllUsers, blockUser, unblockUser } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const router = express.Router();

router.get('/users', authMiddleware, adminMiddleware, getAllUsers); // View all users
router.put('/users/block/:userId', authMiddleware, adminMiddleware, blockUser); // Block a user
router.put('/users/unblock/:userId', authMiddleware, adminMiddleware, unblockUser); // Unblock a user

module.exports = router;
