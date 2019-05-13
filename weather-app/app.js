const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const chalk = require('chalk');

//These are considered 'Callers'
geocode('Mckinney Texas', (error, data) => {
    console.log(chalk.red.inverse(('Error', error)));
    console.log('Data', data);
    forecast(data.latitude, data.longitude, (error, data) => {
        console.log(chalk.red.inverse(('Error', error)));
        console.log('Data:', data);
      })
})






