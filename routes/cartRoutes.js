// routes/cartRoutes.js
const express = require('express');
const { getCart, addItemToCart, updateCartItem, removeItemFromCart } = require('../controllers/cartController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getCart); // Get user cart
router.post('/', authMiddleware, addItemToCart); // Add item to cart
router.put('/', authMiddleware, updateCartItem); // Update item quantity in cart
router.delete('/:productId', authMiddleware, removeItemFromCart); // Remove item from cart

module.exports = router;
