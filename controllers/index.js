var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var router = express.Router();
var request = require('request');
var db = require('../models');

app.use(cookieParser());


router.get('/:id', function(req, res) {
	//NEW LINE
	var searchQuery = req.query.q ? req.query.q : '';
	var id = req.params.id;
	request("http://www.omdbapi.com/?i="+id, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			var movieData = JSON.parse(body);
			res.render("movie/index", {
				movieData: movieData, 
				q: searchQuery
			});
		}
	});
});

module.exports = router;