// server.js
var express  		= require('express');
var app      		= express();
var morgan 			= require('morgan');
var bodyParser 		= require('body-parser');
var methodOverride 	= require('method-override');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.post('/api/ispalindrome', function(req, res) {
  var text = req.body.text,
      rgx = /[^A-Za-z0-9]/g,
      adjStr = text.replace(rgx, '').toLowerCase(),
      revStr = adjStr.split('').reverse().join('');

  res.status((revStr === adjStr) ? 200 : 400).send();
});

app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});

app.listen(8080);
console.log("App running and listening on port 8080");