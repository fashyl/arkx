const express = require('express');
const { viewToDos, viewToDo, createToDo } = require('../controllers/to-dos');
const router = express.Router();

router.route('/')
.get(viewToDos)
.post(createToDo)

router.route('/:id')
.get(viewToDo)

module.exports = router;