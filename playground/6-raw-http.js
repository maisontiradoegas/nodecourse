const https = require('https');
const url = 'https://api.darksky.net/forecast/6147f41f7be1da4d64e83983f04c53a6/40,-75';

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })

})

request.on('error', (error) => {
    console.log('An Error', error)
})

request.end()