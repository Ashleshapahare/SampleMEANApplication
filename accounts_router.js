var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('Home Page');   
});
router.get('/information', function(req, res){
   res.send('Accounts information');   
});

//export this router to use in our index.js
module.exports = router;
