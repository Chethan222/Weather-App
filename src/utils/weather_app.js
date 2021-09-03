const geocode = require("./geocode");
const weatherData = require("./get_weather");

const getWeatherData = function(address, callback) {
    if (!address) {
        callback("Please,provide a address!", undefined);
    } else {
        geocode(address, (error, response) => {
            if (error) {
                return callback(error, undefined);
            }
            weatherData(response, (error, response) => {
                if (error) {
                    return callback(error, undefined);
                }

                return callback(undefined, response);
            });
        });
    }
};
module.exports = getWeatherData;