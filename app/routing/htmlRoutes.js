// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var express = require("express");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

	//Route for home
	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	//Route for survey
	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});


	app.use(express.static(path.join(__dirname, 'public')));
	app.use('../css', express.static('css'));

}