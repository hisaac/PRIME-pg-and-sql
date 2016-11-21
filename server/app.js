var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var connectionString = "postgres://localhost:5432/sweets";
var treats = require('./modules/treats');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/treats', treats);

app.get('/', function(req, res) {
  res.sendFile(path.resolve('./server/public/views/index.html'));
});

app.use(express.static('./server/public'));


app.listen(port, function() {
  console.log('Server running on port: ', port);
});
