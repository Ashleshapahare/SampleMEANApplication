const express = require('express')
const app = express()
const port = 9000
var bodyParser = require("body-parser")

app.use(bodyParser.json())

var user = require('./user.access.router.js')

app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers','content-type');
        next();
});

app.get('/getdata', function(req, res){
        console.log("hello world function called");
       res.send('Hello World!');
});


app.use('/user', user);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




//both index.js and things.js should be in same directory



