var express = require('express');
var app = express();
// var db = require('./db.js');
// var _ = require('underscore');
var Cosmic = require('cosmicjs');

var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


// Cosmic config
var config = {};
config.bucket = {
	slug: 'matttea-blog-app',
	read_key: 'b0ArYqMiFgGNTU2DubNVsNnySAqQc6cbMDJyiPdQbknX7oI67K',
	write_key: 'quarKdFMTq94uNL0Wg8FetEGVScGLsMzKC9UUQG8bFoa6HiWEw'
};


// GET /articles
app.get('/articles', function(req, res) {

	var articlesParams = {
		type_slug: 'articles',
		limit: 500,
		skip: 0
	};
	Cosmic.getObjectType(config, articlesParams, function(error, response) {
		res.json(response);
	}, function (e) {
		res.status(500).send();
	});
});

//POST /comments
var apiPost = "https://api.cosmicjs.com/v1/matttea-blog-app/add-object";
app.post(apiPost, function(req, res) { // something in here that the request is based on commentParamsJson?
										// index.html.commentParamsJson?

    Cosmic.addObject(config, commentParamsJson, function(error, response) {
        res.json(response);
    }, function (e) {
        res.status(500).send();
    });
});

app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT + '.');
});