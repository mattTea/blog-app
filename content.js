//export api call from weather app. change to reflect call to cosmic api

var request = require('request');

module.exports = function (location) {
	return new Promise(function (resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?appid=404502e78f0cf783d14477e7343848be&q=' + encodedLocation + '&units=metric';
	
		if (!location) {
			return reject('No location provided');
		}
		
		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to fetch weather.');
			} else {
				resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
			}
		});
	});
}
