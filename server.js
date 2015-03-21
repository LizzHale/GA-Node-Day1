var express = require('express');
var request = require('request');
var app = express();

app.set("view engine", "ejs");

app.get('/json', function (req, res) {
  request('http//daretodiscover.herokuapp.com/users', function (error, response, body) {
    res.render("home", {
      home: body
    });
  });
});

app.get('/index', function (req, res) {
  request('http://www.facebook.com', function (error, response, body) {
    res.send(body);
  });
});

app.get('/', function (req, res) {
  request('http://www.facebook.com', function (error, response, body) {
    res.render("home", {
      home: body
    });
  });
});

var server = app.listen(3000);
