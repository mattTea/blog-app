module.exports = function (sequelize, DataTypes) {
	return sequelize.define('article', {
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		author: {
			type: DataTypes.STRING,
			allowNull: false
		},
		content: {
			type: DataTypes.TEXT
		},
		apiUrl: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});
};