var mongoose = require('mongoose');
var mongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb://localhost/diaries', {useMongoClient: true});
mongoose.connect('mongodb://localhost/diaries', {useMongoClient: true}); //TODO: update test once working
mongoose.connect('mongodb://localhost/test', {useMongoClient: true}); //TODO: update test once working
console.log('connection successful')


var UserSchema = mongoose.Schema({
var userSchema = mongoose.Schema({
  username: String,
  password: String,
});

var User = mongoose.model('User', UserSchema);

var DiarySchema = mongoose.Schema({
  username: String,
  title: String,

var diarySchema = mongoose.Schema({
  username: String,
  text: String,
  sentiment: String,
});

var Diary = mongoose.model('Diary', DiarySchema);


module.exports.User = User;
module.exports.Diary = Diary;
module.exports.UserDoc = UserDoc;
module.exports.DiaryDoc = DiaryDoc;
