//Requires
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const chalk = require('chalk');

//Command Line Arguments
const address = process.argv[2];

console.log(!address);

if(!address) {
  console.log('please enter a location')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
      if(error) {
        return console.log(error)
      } 
      forecast(latitude, longitude, (error, forcastData) => {
        if(error) {
          return console.log(error);
        }  
          console.log(location);
          console.log(forcastData);
      })
  })
}






