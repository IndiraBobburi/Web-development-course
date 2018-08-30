var express = require('express');
var app = express();

app.get('/things/:name/:id', function(req, res) {
	res.send('id is ' + req.params.id + ' name is ' + req.params.name);
});

app.listen(3000);
