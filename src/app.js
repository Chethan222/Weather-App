const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;

const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
 
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Welcome to weather app'
    });
});
app.get('/weather', (req, res) => {
    res.render('weather', {
        title: 'Get your weather here'
    });
});
app.get('/weather/*', (req, res) => {
    res.render('weather', {
        title: 'Here are your weather details'
    });
});
app.get('*', (req, res) => {
    res.render('PageNotFound');
});


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
