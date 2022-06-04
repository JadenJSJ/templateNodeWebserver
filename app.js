var path = require('path');
var express = require('express');
var app = express();
var htmlPath = path.join(__dirname, 'htmla');

app.use(express.static(htmlPath));

app.get('*', function(req, res) {
  res.status(404).send("Not Found")
  res.statusCode = 404;
});

var server = app.listen(6100, function () {
    console.log('Page is up');
});
