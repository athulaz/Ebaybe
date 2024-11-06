// routes/orderRoutes.js
const express = require('express');
const {
  placeOrder,
  getUserOrders,
  initializePayment,
  verifyPayment
} = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, placeOrder);
router.get('/history', authMiddleware, getUserOrders);
router.post('/initialize-payment', authMiddleware, initializePayment);
router.post('/verify-payment', authMiddleware, verifyPayment);

module.exports = router;
