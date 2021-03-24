const express = require('express')
const app = express()
//const port = 3000
const routerMessages = require("./routes/api/v1/messages");
//const pug = require("pug");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lab5', {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "pug");

app.get('/', (req, res) => {
  res.render('index', { title: 'Lab5 - api', message: 'Hi welcome to lab5 - api!' })
})

app.use("/api/v1/messages", routerMessages);

module.exports = app;


