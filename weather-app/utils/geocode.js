const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFpc29udGlyYWRvZWdhcyIsImEiOiJjanZiYW1xNXMwZDQxNDFwOHZtMzRkMTc2In0.JLnYmUYq9Pwp6nxZXbiy4A&limit=1'

    request({url: url, json: true}, (err, response) => {
        if(err) {
            callback('Unable to connect to location services', undefined);
        } else if(response.body.features.length === 0) {
            callback('Unable to find location. Try another Search', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;