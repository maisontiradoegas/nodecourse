//Requires
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express(); 

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

//Routes
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
        title: 'Help'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Mckinney, Texas',
        forecast: 'Sunny'
    });
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Maison Tiradoegas',
        error: 'Help Article not Found'
    });
})

app.get('/products', (req, res) => {
    console.log(req.query.search);
    res.send({
        products: []
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404', 
        name: 'Maison Tiradoegas',
        error: 'Page not Found'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});