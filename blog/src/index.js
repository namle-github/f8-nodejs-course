const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.render('home');
})

app.get('/news', function (req, res) {
    res.render('news');
})

app.listen(port, () => console.log(`Listening at localhost:${port}`))