const express = require('express');
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/booksOps');
const router = express.Router();

// Books End-Points
router.route('/')
.get(getAllBooks)
.post(addBook);

router.route('/:id')
.get(getBookById)
.put(updateBook)
.delete(deleteBook);

module.exports = router;