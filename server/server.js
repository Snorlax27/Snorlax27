var session = require('express-session');
var bodyParser = require('body-parser');
var db = require('../database/db.js');
var bcrypt = require('bcrypt');
var path = require('path');
var express = require('express');
var app = express();
var request = require('request');
var $ = require('jquery');
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "3df60bff",
  application_key: "deb73f8e34c8cb3a933c133c1e9c27f6"
});

//natural language API
// const language = require('@google-cloud/language');
// const client = new language.LanguageServiceClient();

var port = 8080;
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser());

app.use(session({secret:"snorlax snore", resave:false, saveUninitialized:true}))


app.post('/logout', function(req, res) {
  // console.log(currentUsername)
  req.session.destroy(function(err) {
    if (err) throw err;
  })
  res.send();
  res.end();
})

//NEW ACOUNT:
app.post('/newAccount', function(req, res) {
  addAccount(req.body.username, req.body.password);
  res.status(200).end();
});

var addAccount = function(user, password) {
  var hash = bcrypt.hashSync(password, 10);
  var newAccount = new db.User({
    username: user,
    password: hash
  });
  newAccount.save(function(error) {
    if (error) throw error;
  });
}

var createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
    req.session.user = newUser;
  })
}


//HANDLE LOGIN
app.post('/login', function(req, res) {

  db.User.findOne({
    username: req.body.username
  }, function(error, user) {
    if (error) {
    }
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        createSession(req, res, user.username);
        res.send('true');
        res.end();
      } else {
        console.log('Wrong password');
        res.send();
        res.end();
      }
    }
  });
});

//INITIAL POST GET
app.get('/entries', function(req, res) {
  db.Diary.find({username: req.session.user}, function(error, data) {
    if (error) {
      console.log('error line 12 server.js', error);
    } else {
      console.log('success 14 get request');
      data.reverse();
      res.send(data);
      res.end();
    }
  })
});

//HANDLE DIARY POSTS
app.post('/entries', function(req, res) {
  addDiaryPost(res, req, req.body.title, req.body.text);
});

var addDiaryPost = function(res, req, title, text) {
  var emotionalState = textapi.sentiment({
    'text': text
  }, function(error, response) {
    if (error) throw error;
    if (error === null) {
      console.log(response);
    }
    var newDiary = new db.Diary({
      title: title,
      text: text,
      sentiment: emotionalState,
      username: req.session.user
    });
    newDiary.save(function(error) {
      if (error) throw error;
      res.status(200).end();
    });
  });
}




app.listen(port, function() {
  console.log('Yayy Server is listening on ' + port);
});
