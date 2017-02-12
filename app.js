var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('*', (req, res) => {
	res.render(__dirname + '/server/views/index', {});
});

app.listen(8080);