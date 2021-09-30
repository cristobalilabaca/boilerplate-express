var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.use((req, _, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})

app.get('/', (_, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get("/json", (_, res) => {
  res.json({"message": process.env.MESSAGE_STYLE === 'uppercase' ? "HELLO JSON" : "Hello json"});
})

app.get("/now", (req, _, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({time: req.time});
});

app.get("/:word/echo", (req, res) => {
  res.json({echo: req.params.word});
})

app.route("/name")
  .get((req, res) => {
    res.json({name: `${req.query.first} ${req.query.last}`});
  })

console.log("Hello World");


































 module.exports = app;
