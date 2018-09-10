var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session( {secret: "String for encrypting cookies"} ));

app.get('/', function(req, res) {
	if(req.session.user_page_views)
	{
		req.session.user_page_views++;
		res.send("You have visited this page " + req.session.user_page_views + "times.");
		console.log('Cookies: ', req.cookies);
	}
	else
	{
		req.session.user_page_views = 1;
		res.send("Welcome to this page for the first time!");
	}
});
app.listen(3000);
