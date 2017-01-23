var express = require('express');
var app = express();
var db = require('./db.js');
var _ = require('underscore');

var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


// POST /articles
app.post('/articles', function(req, res) {
    var body = _.pick(req.body, 'title', 'author', 'content', 'apiUrl');

    db.article.create(body).then(function(article) {
        res.json(article.toJSON());
    }, function(e) {
        res.status(400).json(e);
    });
});

// GET /articles?q=title
app.get('/articles', function(req, res) {
    var query = req.query;
    var where = {};

    if (query.hasOwnProperty('author')) {
		where.author = {
			$like: '%' + query.author + '%'
		};
	}

    if (query.hasOwnProperty('q') && query.q.length > 0) {
        where.title = {
            $like: '%' + query.q + '%'
        };
    }

    db.article.findAll({where: where}).then(function (articles) {
        res.json(articles);
    }, function (e) {
        res.status(500).send();
    });
});

db.sequelize.sync(/*{force: true}*/).then(function() {
	app.listen(PORT, function() {
		console.log('Express listening on port ' + PORT + '.');
	});
});