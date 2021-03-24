const express = require('express')
const app = express()
//const port = 3000
const routerMessages = require("./routes/api/v1/messages");
//const pug = require("pug");
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jonathanverhaegen:jonathan123@cluster0.ghtml.mongodb.net/lab5?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "pug");

app.get('/', (req, res) => {
  res.render('index', { title: 'Lab5 - api', message: 'Hi welcome to lab5 - api!' })
})

app.use("/api/v1/messages", routerMessages);

module.exports = app;
