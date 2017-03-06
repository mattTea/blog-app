var express = require('express');
var app = express();
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


//TODO hand drawn blog images
//TODO comments to be added as a metafield to article objects (ability to add multiple)
//TODO search (to search titles and content) to create dynamic list view of titles, each of which are hyperlinked like current blog list
	//Search.click() with blank entry takes to search page with full list of blogs
	//Search.click() with multiple responses takes to search with title list
	//Search.click() with single response takes to specific article page
	//Search.click() with no responses takes to search page with error message (as now)

//TODO contact form required


// Static author page /mattTea


app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT + '.');
});