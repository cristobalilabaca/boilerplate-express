var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (_, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get("/json", (_, res) => {
  res.json({"message": "Hello json"});
})

console.log("Hello World");


































 module.exports = app;
