const request = require('request');

const url = 'https://api.darksky.net/forecast/6147f41f7be1da4d64e83983f04c53a6/37.8267,-122.4233?';

request({ url: url, json: true }, (error, response) => {
    console.log(error);
    
    // console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`);
})

//Geo Coding - the process of taking an address like Philly and converting that into a latitude / longitude coordinate pair.
//Address -> Lat/Long -> Weather

// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFpc29udGlyYWRvZWdhcyIsImEiOiJjanZiYW1xNXMwZDQxNDFwOHZtMzRkMTc2In0.JLnYmUYq9Pwp6nxZXbiy4A&limit=1';

// request({ url: url2, json: true }, (error, response) => {
//     console.log(response.body.features[0].center);
// })