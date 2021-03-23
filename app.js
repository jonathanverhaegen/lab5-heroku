const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const routerMessages = require("./routers/messages");
const pug = require("pug");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lab5', {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "pug");

app.get('/', (req, res) => {
  res.render('index', { title: 'Lab5 - api', message: 'Hi welcome to lab5 - api!' })
})

app.use("/api/v1/messages", routerMessages);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

