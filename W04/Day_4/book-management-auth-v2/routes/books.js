const express = require('express');
const { viewBooks, viewBook, deleteBook, editBook, renderEdit, createBook, renderForm } = require('../controllers/books');
const { isAuthenticated, isTheAuthor, avoidAuth } = require('../middlewares/authOps');
const { sanitize } = require('../middlewares/sanitizer');
const { validateBookEntries } = require('../middlewares/validator');
const { logger } = require('../middlewares/utility');
const upload = require('../middlewares/multer');
const router = express.Router();

// Books End-Points
router.all(logger, sanitize, validateBookEntries)
router.get('/', isAuthenticated ,viewBooks)
router.get('/add', isAuthenticated, renderForm) //
router.get('/:id', isAuthenticated, viewBook)
router.get('/delete/:id', isAuthenticated, isTheAuthor, deleteBook)
router.get('/edit/:id', isAuthenticated, isTheAuthor , renderEdit)
router.post('/edit/:id', isAuthenticated, isTheAuthor, upload.single('cover_image') , editBook)
router.post('/add', isAuthenticated, upload.single('cover_image'), createBook)

module.exports = router;