const request = require('request');

// const url = 'https://api.darksky.net/forecast/6147f41f7be1da4d64e83983f04c53a6/37.8267,-122.4233?';

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     } else {
//         console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`);
//     }
// })

// Geo Coding - the process of taking an address like Philly and converting that into a latitude / longitude coordinate pair.
// Address -> Lat/Long -> Weather

// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/yo.json?access_token=pk.eyJ1IjoibWFpc29udGlyYWRvZWdhcyIsImEiOiJjanZiYW1xNXMwZDQxNDFwOHZtMzRkMTc2In0.JLnYmUYq9Pwp6nxZXbiy4A&limit=1';

// request({ url: url2, json: true }, (error, response) => {
//     if(error){
//         console.log('Error Occured');
//     } else if(response.body.features.length === 0){
//         console.log('No Matching Results');
//     }  else {
//         console.log(response.body.features[0].center);
//     }
// })

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFpc29udGlyYWRvZWdhcyIsImEiOiJjanZiYW1xNXMwZDQxNDFwOHZtMzRkMTc2In0.JLnYmUYq9Pwp6nxZXbiy4A&limit=1'
}

geoCode('Texas', (err, data) => {

})