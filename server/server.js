var express = require('express');
var app = express();
var port = 8080;

app.use(express.static(__dirname + '/../public'));

// app.get('/', function(req, res) {
//   res.send('Hello Wuuurld');
// });

app.listen(port, function() {
  console.log('Yayy Server is listening on ' + port);
});
