const express = require('express');
const { auth, register } = require('../controllers/auth.api');

const {
  addTodo,
  getTodo,
  deleteTodo,
  updateTodo,
  getSelectTodo,
} = require('../controllers/todo.api');
const router = express.Router();
//auth reg
router.post('/auth', auth);
router.post('/registration', register);

//todo
router.post('/todo', addTodo);
router.post('/todo/:id', getSelectTodo);
router.get('/todo', getTodo);
router.delete('/todo/:id', deleteTodo);
router.put('/todo/:id', updateTodo);

module.exports = router;
