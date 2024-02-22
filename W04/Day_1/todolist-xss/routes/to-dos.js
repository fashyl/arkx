const express = require('express');
const { viewToDos, viewToDo, createToDo, editToDo, deleteToDo, RenderTodo, renderEdit } = require('../controllers/to-dos');
const { sanitize } = require('../middlewares/sanitizer');
const { validate } = require('../middlewares/validator');
const router = express.Router();

// router.route('/:id')
// .get(viewToDo)
// .patch(authenticator, editToDo)
// .delete(authenticator,deleteToDo)

router.get('/', viewToDos)
router.get('/delete/:id', deleteToDo)
router.post('/update/:id', sanitize, validate, editToDo) //
router.get('/update/:id', renderEdit)
router.get('/view/:id', viewToDo)
router.get('/add', RenderTodo)
router.post('/add', sanitize, validate, createToDo) //

module.exports = router;