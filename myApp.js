var express = require('express');
var app = express();

app.get('/', (_, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

console.log("Hello World");


































 module.exports = app;
