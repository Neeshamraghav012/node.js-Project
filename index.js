

const http = require("http");
const express = require("express");
app = express();
const router = express.Router();

console.log(__dirname)
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {

    res.send("<h1>Hello, World Express!<h1>");
    console.log(req.params);

})

app.get('/about', (req, res) => {
        
    res.send("<h1>This is about Page.</h1>");

})


app.listen(port, () => console.log(`The server is listning to port ${port}`))

