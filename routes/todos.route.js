const express = require('express')

const todosController = require('../controllers/todos.controller')
const todosRouter = express.Router()

todosRouter.get('/', todosController.index);
todosRouter.get('/:todoId', todosController.show);
todosRouter.post('/', todosController.create);
todosRouter.put('/:todoId', todosController.update);
todosRouter.delete('/:todoId', todosController.destroy);

module.exports = todosRouter