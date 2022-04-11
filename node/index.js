// importing required modules
const http = require("http");
const express = require("express");
const things = require("./things.js");
const hbs = require('hbs');
const mongoose = require('mongoose');
const models = require('./models.js');
const bodyParser = require('body-parser')
const session = require('express-session');
const cookieParser = require('cookie-parser');


app = express();

app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(session({secret: "Shh, its a secret!"}));
app.set('view engine', 'hbs')
app.use(express.static('staticfiles'));

app.use("/router", things.router);

app.use((req, res, next) => {

  console.log('Time:', Date.now())
  next()

})

app.get('/', (req, res, next) => {

    // res.cookie("name", "Neesham");

    if (!req.session.name){

      req.session.name = "Neesham";
    }

    console.log(req.session.name);

    res.render('home');


    next();

}, (req, res, next) => {console.log("Request Type: ", req.method); next();},


)

app.get('/about', (req, res) => {
        
    res.send("<h1>This is about Page.</h1>");

})

// Get data from the user
app.get('/person', (req, res) => {

    res.render('person')
})


// Save the data
app.post('/person', (req, res) => {

    //Get the parsed information
    var personInfo = req.body; 
    console.log(req.body);

    if(!personInfo.name || !personInfo.age || !personInfo.nationality){
       res.render('error', {
          message: "Sorry, you provided worng info", type: "error"});
    } else {
       var newPerson = new models.Person({
          name: personInfo.name,
          age: personInfo.age,
          nationality: personInfo.nationality
       });
    
       newPerson.save(function(err, Person){
          if(err)
             res.render('error', {message: "Database error", type: "error"});
          else
             res.render('error', {
                message: "New person added", type: "success", person: personInfo});
       });
    }


 });

// Show the data
app.get('/show-data', (req, res) => {

  models.Person.find(function(err, response){

    res.json(response);

  }); 

})


app.listen(process.env.PORT || 8000, () => console.log(`The server is listning to port 8000`))
