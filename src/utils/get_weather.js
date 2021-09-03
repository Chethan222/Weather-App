const request = require('request');


const getWeatherData = ({ longitude, lattitude, location } = {}, callback) => {

  const accessToken = '32be701ce42ae96761e970b90fbf1ba3';
  const weatherstackURL = 'http://api.weatherstack.com/current?access_key='+encodeURIComponent(accessToken)+'&query='+encodeURIComponent(lattitude)+","+encodeURIComponent(longitude);
     
  request({ url: weatherstackURL, json: true },
    (error, response) => {
        if (error) {
            callback("Unable to connect to weather service!",undefined)
        } else if(response.body.error || response.body.current.length == 0){
            callback("Unable to find the location!",undefined);
        } else {
            const data = response.body.current;
            callback(undefined,"It's currently " + data.temperature + " degrees. There is " + data.feelslike + "% chance of rain as observerd at " + data.observation_time + ', '+location+".");
        }
    });
}

module.exports = getWeatherData;
