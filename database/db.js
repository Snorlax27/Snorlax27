var mongoose = require('mongoose');
var mongoClient = require('mongodb').MongoClient;

//Connects to Mlabs mongodb. Will need to make a new one.
mongoose.connect('mongodb://admin:admin@ds163699.mlab.com:63699/testdiary'); //

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
});

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

var User = mongoose.model('User', UserSchema);
var Diary = mongoose.model('Diary', DiarySchema);

module.exports.User = User;
module.exports.Diary = Diary;