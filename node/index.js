// importing required modules
const http = require("http");
const express = require("express");
var things = require("./things.js");
const hbs = require('hbs');
var mongoose = require('mongoose');

app = express();
const router = express.Router();

app.set('view engine', 'hbs')
app.use(express.static('staticfiles'));
app.use("/router", things);

console.log(__dirname)
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {

    //res.send("<h1>Hello, World Express!<h1>");
    res.render('home')

})

app.get('/about', (req, res) => {
        
    res.send("<h1>This is about Page.</h1>");

})

app.get('/person', (req, res) => {

    res.render('person')
})


// Database utilities.
mongoose.connect('mongodb://localhost/my_db');

var personShema = mongoose.Schema({name: String, age: Number, nationality: String});

var person = mongoose.model("Person", personShema);

app.post('/person', function(req, res){
    var personInfo = req.body; //Get the parsed information
    console.log(personInfo);
    if(!personInfo.name || !personInfo.age || !personInfo.nationality){
       res.render('show_message', {
          message: "Sorry, you provided worng info", type: "error"});
    } else {
       var newPerson = new Person({
          name: personInfo.name,
          age: personInfo.age,
          nationality: personInfo.nationality
       });
         
       newPerson.save(function(err, Person){
          if(err)
             res.render('show_message', {message: "Database error", type: "error"});
          else
             res.render('show_message', {
                message: "New person added", type: "success", person: personInfo});
       });
    }
 });


app.listen(port, () => console.log(`The server is listning to port ${port}`))

