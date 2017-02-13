var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use('/', express.static('public'));
app.use('/bower_components', express.static('bower_components'));

app.get('/partials/:name', function (req, res){
	var name = req.params.name;
	res.render('partials/' + name);
});

app.get('/favicon.ico', (req, res) => {
	res.type('image/x-icon').status(200).end();
});

app.get('*', (req, res) => {
	res.render(__dirname + '/server/views/index', {});
});

app.listen(8080);