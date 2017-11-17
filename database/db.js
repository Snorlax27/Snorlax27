var mongoose = require('mongoose');
var mongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb://localhost/diaries', {useMongoClient: true});
console.log('connection successful')


var UserSchema = mongoose.Schema({
  username: String,
  password: String,
});

var User = mongoose.model('User', UserSchema);

var DiarySchema = mongoose.Schema({
  username: String,
  title: String,
  text: String,
  sentiment: String,
});

var Diary = mongoose.model('Diary', DiarySchema);


module.exports.User = User;
module.exports.Diary = Diary;