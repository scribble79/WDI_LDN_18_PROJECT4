var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

var morgan = require('morgan');


app.use(morgan('dev'));
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function() {
  console.log("Express is listening on port " + port);
});