var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ddf752e3a4329294f60f056d66ec5735&units=metric';

module.exports = {
	getTemp: function(location) {
		var encodeLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

		return axios.get(requestUrl).then(function(res){
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(err) {
			throw new Error(err.response.data.message);
		});
	}
}