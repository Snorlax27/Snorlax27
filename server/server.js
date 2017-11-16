var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;
var bcrypt = require('bcrypt');
var db = require('../database/db.js');
var session = require('express-session');
var path = require('path');
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser());
// var Login = require('../public/components/login.js')

// mike: what the...?
app.use(session({secret:"fdghjikllhgytrd345678",resave:false,saveUninitialized:true}))

app.get('/entries', function(req, res) {
  // if (!req.session.user) {
  //   res.redirect('/login');
  // }
  db.Diary.find(function(error, data) {
    if (error) {
      console.log('error line 12 server.js', error);
    } else {
      console.log('success 14 get request');
    }
    res.send(data);
  })
});

//HANDLE DIARY POSTS
app.post('/entries', function(req, res) {
  console.log('REQ BODY -----', req.body);
  addDiaryPost(req.body.title, req.body.text);
  res.status(200).end();
});

var addDiaryPost = function(title, text) {
  var newDiary = new db.Diary({
    title: title,
    text: text
  });
  newDiary.save(function(error) {
    if (error) throw error;
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
        req.session.user = user.username;
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

//NEW ACOUNT:
app.post('/newAccount', function(req, res) {
  console.log('REQ BODY -----', req.body);
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



//**NATURAL LANGUAGE API***
//how do we link HTTP?
var resultsFromAPI = {};
var lanuageAPI = function(text) {
  $http.post('https://language.googleapis.com/v1/documents:analyzeSentiment?key={YOUR_API_KEY}').then(function(response, error){
    if (error) {
      console.log('error GET line 54 server.js', error)
    } else if (response) {
      resultsFromAPI = response; //narrow down

      //TODO send to client side... figure out how to display
      console.log('SUCCESS GET line 59 server.js', response);
    }
  });
}
// POST https://language.googleapis.com/v1/documents:analyzeSentiment?key={YOUR_API_KEY}



app.listen(port, function() {
  console.log('Yayy Server is listening on ' + port);
});
