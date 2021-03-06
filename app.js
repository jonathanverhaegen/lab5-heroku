const express = require('express')
const app = express()
//const port = 3000
const routerMessages = require("./routes/api/v1/messages");
//const pug = require("pug");
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb+srv://jonathanverhaegen:7BU40fdgvRV@cluster0.ghtml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "pug");

app.get('/', (req, res) => {
  res.render('index', { title: 'Lab5 - api', message: 'Hi welcome to lab5 - api!' })
})

app.use("/api/v1/messages", routerMessages);

module.exports = app;
