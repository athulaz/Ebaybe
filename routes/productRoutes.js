// routes/productRoutes.js
const express = require('express');
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const router = express.Router();

// Public routes
router.get('/', getAllProducts); // Get all products
router.get('/:id', getProductById); // Get a single product by ID

// Admin routes
router.post('/', authMiddleware, adminMiddleware, createProduct); // Create a product
router.put('/:id', authMiddleware, adminMiddleware, updateProduct); // Update a product
router.delete('/:id', authMiddleware, adminMiddleware, deleteProduct); // Delete a product

module.exports = router;
