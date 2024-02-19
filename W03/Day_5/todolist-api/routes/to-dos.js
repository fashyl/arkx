const express = require('express');
const { viewToDos, viewToDo, createToDo, editToDo, deleteToDo } = require('../controllers/to-dos');
const { authenticator } = require('../middlewares/authenticator');
const router = express.Router();

router.route('/')
.get(viewToDos)
.post(createToDo)

router.route('/:id')
.get(viewToDo)
.patch(authenticator, editToDo)
.delete(authenticator,deleteToDo)

module.exports = router;