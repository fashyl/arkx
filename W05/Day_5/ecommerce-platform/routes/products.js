const express = require('express');
const { readProducts, readProductById, createProducts, updateProduct, deleteProduct } = require('../controllers/products');
const { filterProductsByCategory, sortProducts, searchProducts, filterProductsByPrice, getProductsPaginated } = require('../controllers/products_queries');
const { getTotalProductCount, getAverageProductPrice, getCheapestProduct, getMostExpensiveProduct, getPriceRangePerCategory, getProductCountByCategory, getProductStock } = require('../controllers/products_stats');
const { isOwner, checkAuthentication } = require('../middlewares/authenticator');
const productsRouter = express.Router();

// Handles various queries related to products,
// including filtering, sorting, and pagination.
productsRouter.get('/sort', sortProducts);
productsRouter.get('/search', searchProducts);
productsRouter.get('/filter', filterProductsByCategory);
productsRouter.get('/filter/price', filterProductsByPrice);
productsRouter.get('/browse', getProductsPaginated);

//   Advanced feature endpoint for retrieving statistics about products.
//   such as total count, average price, or most popular categories.
// TO BE REFACTORED FOR QUERY PARAMETERS USE
productsRouter.get('/stats/count', getTotalProductCount);
productsRouter.get('/stats/average', getAverageProductPrice);
productsRouter.get('/stats/cheapest', getCheapestProduct);
productsRouter.get('/stats/pricey', getMostExpensiveProduct);
productsRouter.get('/stats/range', getPriceRangePerCategory);
productsRouter.get('/stats/stock', getProductStock);
productsRouter.get('/stats/count-per-category', getProductCountByCategory);

// Basic CRUD operations for products.
productsRouter.get('/', readProducts); // Get all products.
productsRouter.get('/:id', readProductById); // Get product by Id.
productsRouter.post('/', checkAuthentication, createProducts); // Create new product(s).
productsRouter.patch('/:id', checkAuthentication, isOwner, updateProduct); // Update a product.
productsRouter.delete('/:id', checkAuthentication, isOwner, deleteProduct); // Delete a product.

module.exports = productsRouter;