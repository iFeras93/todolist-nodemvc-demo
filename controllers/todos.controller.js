const todosModal = require('../models/todo.model')

function index(req, res) {
    return res.send(todosModal)
}

function show(req, res) {
    let todoId = req.params.todoId
    let singleTodo = todosModal.find(todo => todo.id === parseInt(todoId));
    return res.send(singleTodo)
}

function create(req, res) {
    if (!req.body.title)
        return res.status(404)
            .send("title is required")

    let todo = {
        id: todosModal.length + 1,
        title: req.body.title
    };
    todosModal.push(todo)
    return res.send(todo)
}

function update(req, res) {
    if (!req.body.title)
        return res.statusCode(404)
            .send("title is required")

    let todoId = req.params.todoId
    let singleTodo = todosModal.find(todo => todo.id === parseInt(todoId));
    singleTodo.title = req.body.title

    return res.send(singleTodo)
}

function destroy(req, res) {
    let todoId = req.params.todoId
    let singleTodo = todosModal.find(todo => todo.id === parseInt(todoId));
    todosModal.splice(todosModal.indexOf(singleTodo), 1)
    return res.send("deleted successfully!!!")
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}