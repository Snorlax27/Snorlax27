var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 8080;
var db = require('../database/db.js');
// sets up default page
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());


app.get('/entries', function(req, res) {
  db.Diary.find(function(error, data) {
    if (error) {
      console.log('error line 12 server.js', error);
    } else {
      console.log('success 14 get request', data);
    }
    res.send(data);
  })
});

app.post('/entries', function(req, res) {
  addDiaryPost(req.body.text); //calls helper function
  res.status(200).end();
});

var addDiaryPost = function(noteText) {
  var newDiary = new db.Diary({
    username: noteText,  //THIS WON'T WORK will need to send username with each post request?
    text: noteText,
  });
}

//FAKE DATA:
// var newDiary = new db.Diary({
//   username: 'Yazhi the Boss',
//   text: 'Snorlax fell over ontop of me and I cannot get up. He is soooooooo fatt!!!! :(',
// });

// newDiary.save(function(err) {
//   if (err) throw err;
// });



app.listen(port, function() {
  console.log('Yayy Server is listening on ' + port);
});
