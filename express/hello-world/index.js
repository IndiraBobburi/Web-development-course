var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
   res.send("Hello world!");
});
app.post('/hello', function(req, res) {
   res.send("Post of the hello is called!");
});
app.all('/test', function(req, res) {
   res.send("HTTP method doesn't have any effect on this route!!");
});
app.listen(3000);
