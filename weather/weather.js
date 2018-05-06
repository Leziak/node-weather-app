const request = require('request');

const getWeather = (lat,lng, callback) => request({
    url: `https://api.darksky.net/forecast/bf55078010bab701138ba8f760909aa8/${lat},${lng}`,
    json: true
}, (error, response, body) => {
    if (error) {
        callback('Unable to connect to Dark Sky servers.')
    } else if (response.statusCode===400) {
        callback('Unable to fetch weather data.')
    } else {
        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        });
    }
});

module.exports.getWeather = getWeather;