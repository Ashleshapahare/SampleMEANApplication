var express = require('express');
var router = express.Router();
const app = express()
var userController= require('./controllers/user.controller.js')

//router.post("/register", userController.register);

router.post("/authenticate",userController.authenticate);
router.get("/items/:user",userController.getItems);
router.post("/register",userController.registerUser);
router.delete("/items/:id",userController.deleteItems);

router.get("/", function(req, res){console.log("User Module Called")})

//export this router to use in our index.js
module.exports = router; 

