// npm dependencies
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080; //process.env.PORT uses the default port Heroku assigns

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//require the route file in our server
require('./app/routing/htmlRoutes.js')(app);

//This lets us to know the server is running and listening on PORT 8080.
app.listen(PORT, function(){
	console.log("Your little app is listening on PORT: " + PORT);

});
