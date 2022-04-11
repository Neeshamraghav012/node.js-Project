
const express = require("express");

router1 = express.Router();
// router2 = express.Router();
// router3 = express.Router();

router1.get('/get', function(req, res){

    res.send("Router in action!");
})

router1.post('/post', function(req, res){

	res.send("Post Router in action!");
})





module.exports = {"router": router1};
