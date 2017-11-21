var session = require('express-session');
var bodyParser = require('body-parser');
var db = require('../database/db.js');
var bcrypt = require('bcrypt');
var path = require('path');
var express = require('express');
var app = express();
var port = 8080;
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser());

app.use(session({secret:"snorlax snore", resave:false, saveUninitialized:true}))


app.post('/logout', function(req, res) {
  // console.log(currentUsername)
  currentUsername = '';
  // req.session.destroy(function(err) {
  //   if (err) throw err;
  // })
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

var currentUsername;

//HANDLE LOGIN
app.post('/login', function(req, res) {
  db.User.findOne({
    username: req.body.username
  }, function(error, user) {
    if (error) {
    }
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        currentUsername = user.username;
        // createSession(req, res, user.username);
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
  db.Diary.find({username: currentUsername}, function(error, data) {
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
  // console.log('REQ BODY -----', req.body);
  addDiaryPost(req.body.title, req.body.text);
  res.status(200).end();
});

var addDiaryPost = function(title, text) {
  var newDiary = new db.Diary({
    title: title,
    text: text,
    username: currentUsername
  });
  newDiary.save(function(error) {
    if (error) throw error;
  })
}



let getPokemonsEmotions = (name, callback) => {
  var result = request.get({
    url: `https://language.googleapis.com/v1/documents:analyzeSentiment?wkey=${name}`
  }, function(err, response, body) {
    callback(err, body);
  })
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
