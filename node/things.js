
const express = require("express");

router = express.Router();

router.get('/things/', function(req, res){

    res.send("Router in action!");
})

module.exports = router;