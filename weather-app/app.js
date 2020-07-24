const request = require('request');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
const address = process.argv[2];
if (!address) return console.log('Please provide the location');
else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) return console.log(error);
    forecast(latitude, longitude, (error, Fdata) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(Fdata);
    });
  });
}

// const url =
//   'http://api.weatherstack.com/current?access_key=a7d1ec5246748cf207e098b2977710d5&query=37.8267,-122.4233&units=s';
// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Network Prob');
//   } else if (response.body.error) {
//     console.log('Undefined');
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         '. It is currently ' +
//         response.body.current.temperature +
//         ' degrees out. There is ' +
//         response.body.current.precip +
//         ' % chance of raining.'
//     );
//   }
// });

// const geocodingurl =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWtyaXRoaSIsImEiOiJja2N1ZWd5YXYweWowMnNvNGQzNzZ4eGl1In0.zqe1yhSAt2BgzSmhE3K8SQ';
// request({ url: geocodingurl, json: true }, (error, response) => {
//   if (error) {
//     console.log('Low level error / Network Prob');
//   } else if (response.body.features.length === 0) {
//     console.log('Undefined');
//   } else {
//     console.log(
//       ' Latitude : ' +
//         response.body.features[0].center[1] +
//         '. Longitude : ' +
//         response.body.features[0].center[0]
//     );
//   }
// });
