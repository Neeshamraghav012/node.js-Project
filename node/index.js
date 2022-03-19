// importing required modules
const http = require("http");
const express = require("express");

var hbs = require('hbs');

app = express();
const router = express.Router();
app.set('view engine', 'hbs')
app.use(express.static('staticfiles'));
console.log(__dirname)
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {

    res.send("<h1>Hello, World Express!<h1>");
    //res.render('home')

})

app.get('/about', (req, res) => {
        
    res.send("<h1>This is about Page.</h1>");

})


app.listen(port, () => console.log(`The server is listning to port ${port}`))

