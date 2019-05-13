const request = require('request');
const chalk = require('chalk');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/6147f41f7be1da4d64e83983f04c53a6/${encodeURIComponent(latitude)}, ${encodeURIComponent(longitude)}`;

    request({url: url, json: true}, (error, response) => {
        if(error) {
            console.log(chalk.red.inverse(err));
            callback('Unable to connect to location services', undefined);
        } else if(response.body.error) {
            callback('Coordinate error', undefined);} 
        else {
            callback(undefined,`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
        }
    })
}

module.exports = forecast;