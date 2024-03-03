//
//   Basic CRUD operations for products.
// 

const express = require('express');
const { readProducts, readProductById, createProducts, updateProduct, deleteProduct } = require('../controllers/products');
const productsRouter = express.Router();

productsRouter.get('/api/products', readProducts); // Get all products.
productsRouter.get('/api/products/:id', readProductById); // Get a specific product by ID.
productsRouter.post('/api/products', createProducts); // Create new product(s).
productsRouter.patch('/api/products/:id',updateProduct) // Update a product.
productsRouter.delete('/api/products/:id',deleteProduct) // Delete a product.

module.exports = productsRouter;