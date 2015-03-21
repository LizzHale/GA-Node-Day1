var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended:true
}));

app.set("view engine", "ejs");

app.get('/users', function (req, res) {
  request('http://daretodiscover.herokuapp.com/users', function (error, response, body) {
    res.render("index", {
      users: JSON.parse(body)
    });
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      console.log(data);
    }
  });
});

app.get('/last', function (req, res) {
  request('http://daretodiscover.herokuapp.com/users', function (error, response, body) {
    res.render("last", {
      users: JSON.parse(body)
    });
  });
});

app.get('/first', function (req, res) {
  request('http://daretodiscover.herokuapp.com/users', function (error, response, body) {
    res.render("first", {
      users: JSON.parse(body)
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

app.get('/newuser', function (req, res) {
  res.render("newuser");
});

app.post('/newuser', function (req, res) {
  request({
    method: "POST",
    uri: "http://daretodiscover.herokuapp.com/users",
    formData: {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username
    }
  }, function(error, response, body) {
    res.redirect("/users");
  });
});
var server = app.listen(3000);
