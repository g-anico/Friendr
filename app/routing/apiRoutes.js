//We have 2 routes:
//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST route with the url /api/friends. This will be used to handle incoming survey results and also be used to handle **compatibility logic**

var friendsData = require('../data/friends');

module.exports = function (app) {

	app.get('/api/friends', function(req, res) { //GET the data the user will see
		res.json(friendsData);

	});

  app.post('/api/friends', function(req, res){ //user can POST to our server for storage
    friendsData.push(req.body);
    res.json(friendsData);
  })
};
