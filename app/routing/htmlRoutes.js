//html routes: the router will read the url path what page to deliver.

const path = require('path'); //using const because this does not change therefore it stays constant

//the data here will be used in other files
module.exports = function (app) {

//when we get the `root`, send the user the file index.html when we are at localhost 8080
app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});

//when we get the `survey`, send the user the file survey.html when we are at localhost 8080
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

//we use a default USE route that leads to home.html which displays the homepage
app.use( function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});

};
