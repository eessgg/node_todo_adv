const mongoose = require('mongoose');
const urlLocalMongo = 'mongodb://localhost:27017/TodoApp'
const urlMongo = 'mongodb+srv://esterdev:esterdev@omnistack-cjkv9.mongodb.net/TodoApp?retryWrites=true&w=majority'

mongoose.Promise = global.Promise;

mongoose.connect(urlLocalMongo);

module.exports = { mongoose };