const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '.json?access_token=pk.eyJ1IjoibWFpc29udGlyYWRvZWdhcyIsImEiOiJjanZiYW1xNXMwZDQxNDFwOHZtMzRkMTc2In0.JLnYmUYq9Pwp6nxZXbiy4A&limit=1'

    console.log(url);

    request({url: url, json: true}, (err, response) => {
        if(err) {
            console.log(err);
            callback('Unable to connect to location services', undefined);
        } else if(response.body.features.length === 0) {
            callback('Coordinate error', undefined);} 
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1]
            });
        }
    })
}


module.exports = forecast;