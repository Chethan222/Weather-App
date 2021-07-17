const geocode = require('./utils/geocode');
const weatherData = require('./utils/get_weather');

const address = process.argv[2];

if (!address) {
  console.log("Please,provide a address!")
} else {
  geocode(address, (error, response) => {
    if (error) {
      return console.log(error)
    }
    weatherData(response, (error, response) => {
      if (error) {
        return console.log(error);
      }
      console.log(response);
    });
      
  });
}

    