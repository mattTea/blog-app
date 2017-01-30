//TODO query backend api using query urls
	//change api to point to cosmic.js api urls with queries based on: return all, title, author
	//add user entry boxes and buttons to index plug-in to search for articles based on title and author

	//within server.js update the api methods and queries against the object properties (title, author)


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
// app.get('/articles', function(req, res) {
// 	var query = req.query;
// 	var where = {};

// 	if (query.hasOwnProperty('author')) {
// 		where.author = {
// 			$like: '%' + query.author + '%'
// 		};
// 	}

// 	if (query.hasOwnProperty('q') && query.q.length > 0) {
// 		where.title = {
// 			$like: '%' + query.q + '%'
// 		};
// 	}

// 	db.article.findAll({where: where}).then(function (articles) {
//         res.json(articles);
//     }, function (e) {
//         res.status(500).send();
//     });
// });



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


// Get object
// var objectParams = {
// 	slug: 'part-2-the-beginnings-of-addiction'
// }
// Cosmic.getObject(config, objectParams, function(error, response) {
// 	console.log(response);
// });

app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT + '.');
});