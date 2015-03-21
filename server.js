var express = require('express');
var request = require('request');
var app = express();

app.set("view engine", "ejs");

app.get('/index', function (req, res) {
  request('http://www.facebook.com', function (error, response, body) {
    res.send(body);
  });
});

app.get('/', function (req, res) {
  res.render("home");
});

var server = app.listen(3000);
