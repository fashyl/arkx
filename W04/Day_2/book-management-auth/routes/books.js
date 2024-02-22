const express = require('express');
const { viewBooks, viewBook, deleteBook, editBook, renderEdit, createBook, renderForm } = require('../controllers/books');
const { isAuthenticated, authView } = require('../middlewares/auth');
const router = express.Router();

// Books End-Points
router.get('/', isAuthenticated ,viewBooks)
router.get('/add', isAuthenticated, renderForm) //
router.get('/:id', isAuthenticated, viewBook)
router.get('/delete/:id', isAuthenticated, deleteBook)
router.get('/edit/:id', isAuthenticated, renderEdit)
router.post('/edit/:id', isAuthenticated, editBook)
router.post('/add', isAuthenticated, createBook)

module.exports = router;