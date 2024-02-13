const express = require('express');
const { getAllAuthors, getAuthorById, addAuthor, updateAuthor, deleteAuthor } = require('../controllers/authorsOps');
const router = express.Router();

// Authors End-Points
router.route('/')
.get( getAllAuthors)
.post( addAuthor );

router.route('/:id')
.get( getAuthorById )
.put( updateAuthor )
.delete( deleteAuthor );

module.exports = router;