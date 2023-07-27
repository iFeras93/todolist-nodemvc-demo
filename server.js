const express = require('express')
const app = express()

const todosRoutes = require('./routes/todos.route')


app.use(express.json())

app.use((req, res, next) => {
    let start = Date.now()
    next()
    let endReq = Date.now() - start
    console.log(`${req.method} ${req.url} by ${req.ip} take ${endReq}ms`)
})



app.use('/api/todos', todosRoutes)


app.listen(3434, () => {
    console.log(`you app run at http://localhost:3434`)
})