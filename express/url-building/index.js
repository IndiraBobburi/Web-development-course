var express = require('express');
var app = express();

//only match the requests that have a 5-digit long id.
app.get('/things/:id([0-9]{5})', function(req, res) {
	res.send('id is '+ req.params.id);
});

//invalid url message for other routes
app.get('*', function(req, res) {
	res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);
