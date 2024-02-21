const express = require('express');
const { viewToDos, viewToDo, createToDo, editToDo, deleteToDo, RenderTodo, renderEdit } = require('../controllers/to-dos');
const { authenticator } = require('../middlewares/authenticator');
const router = express.Router();

// router.route('/:id')
// .get(viewToDo)
// .patch(authenticator, editToDo)
// .delete(authenticator,deleteToDo)

router.get('/', viewToDos)
router.get('/delete/:id', deleteToDo)
router.post('/update/:id', editToDo)
router.get('/update/:id', renderEdit)
router.get('/view/:id', viewToDo)
router.get('/add', RenderTodo)
router.post('/add', createToDo)

module.exports = router;