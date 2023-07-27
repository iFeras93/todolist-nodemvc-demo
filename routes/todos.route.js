const express = require('express')

const todosController= require('../controllers/todos.controller')
const todosRouter= express.Router()

todosRouter.get('/',todosController.index);
todosRouter.get('/:todoId',todosController.show);

module.exports= todosRouter