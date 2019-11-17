const express = require('express')
const mongoose = require('./db/mongoose')

const { Todo } = require('./models/todo')
const { User } = require('./models/user')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('index')
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send(todos)
  }, (e) => {
    res.status(400).send(e)
  })
})

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = { app };