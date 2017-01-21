var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;

if (env === 'production') {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres'
	});
} else {
	sequelize = new Sequelize(undefined, undefined, undefined, {
		'dialect': 'sqlite',
		'storage': __dirname + '/data/dev-blog-app.sqlite'
	});
}

var db = {};

db.article = sequelize.import(__dirname + '/models/article.js');
// db.comment = sequelize.import(__dirname + '/models/comment.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;