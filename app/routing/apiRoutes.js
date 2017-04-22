
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {


	//sends friends obj arr
	app.get("/api/friends", function(req, res) {
	  return res.json(friendsData);
	});


	//Take in survey - takes in JSON input
	app.post("/api/new", function(req, res) {
	    
	        var newFriend = req.body;
	        friendsData.push(newFriend);
	});

}