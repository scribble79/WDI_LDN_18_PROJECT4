var express       = require('express');
var app           = express();
var port          = process.env.PORT || 8000;

var router        = require('./config/routes');
var mongoose      = require('mongoose');
var bodyParser    = require('body-parser');
var morgan        = require('morgan');
var db            = require('./config/database');

mongoose.connect(db.uri);


app.use(morgan('dev'));
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.use('/', router);

app.listen(port, function() {
  console.log("Express is listening on port " + port);
});