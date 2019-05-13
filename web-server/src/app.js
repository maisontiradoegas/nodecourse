const path = require('path');
const express = require('express');

const app = express(); 
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine','hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Lucy Tiradoegas'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Macy Tiradoegas',
        title: 'About Me'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        name: 'Leo Tiradoegas',
        message: 'I need water!'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Mckinney, Texas',
        forecast: 'Sunny'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});