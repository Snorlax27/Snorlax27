var mongoose = require('mongoose');
var mongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb://admin:admin@ds163699.mlab.com:63699/testdiary'); //TODO: update test once working


// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// mongoose.connect('mongodb://localhost/diaries', {useMongoClient: true}); //TODO: update test once working


var UserSchema = mongoose.Schema({
  username: String,
  password: String,
});

var User = mongoose.model('User', UserSchema);


var DiarySchema = mongoose.Schema({
  username: String,
  title: String,
  sentiment: Object,
  text: String,
  time: {
    type: Date,
    default: Date.now
  },
  happyCounter: Number
});

var Diary = mongoose.model('Diary', DiarySchema);



module.exports.User = User;
module.exports.Diary = Diary;

// var fluffy = new UserDoc({userName: 'fluffy'});
// fluffy.save(function (error, success) {
//   if (error) {
//     console.log('it didnt work db line 33');
//   }
//   console.log('hey Mike it worked :D');
// })

