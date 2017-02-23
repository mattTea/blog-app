var express = require('express');
var app = express();

module.exports = {
	postComment: function(req, res) {
		var apiPost = "https://api.cosmicjs.com/v1/matttea-blog-app/add-object";
		app.post(apiPost, function(req, res) {

			newComment = req.body.newComment;

		    var commentParams = {
		        type_slug: 'comments',
		        title: 'Comment Title',
		        content: newComment
		    };
		            
		    var commentParamsJson = JSON.stringify(commentParams);
		    console.log(commentParamsJson);

		    Cosmic.addObject(config, commentParamsJson, function(error, response) {
		        res.json(response);
		    }, function (e) {
		        res.status(500).send();
		    });
		});
	}

}





