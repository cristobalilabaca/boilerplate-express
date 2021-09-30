var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (_, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get("/json", (_, res) => {
  res.json({"message": process.env.MESSAGE_STYLE === 'uppercase' ? "HELLO JSON" : "Hello json"});
})

console.log(process.env)

console.log("Hello World");


































 module.exports = app;
