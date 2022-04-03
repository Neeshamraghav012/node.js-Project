
const express = require("express");

router = express.Router();
data = express.Router();

router.get('/things/', function(req, res){

    res.send("Router in action!");
})

data.get('/data', (req, res) => {

  res.send("Helo, node!");

 })



module.exports = {"router": router, "data": data};
