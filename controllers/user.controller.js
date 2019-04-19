const express = require('express')
const app = express()
var dashboardService = require("./dashboard.service") ;
var userService= require("./user.service");

exports.authenticate= async function(req,res)
{
    console.log("Inside Controller : " + JSON.stringify(req.body)) ;
    var isauthenticated = await userService.authenticate(req.body);
    var userdata={"authenticated": isauthenticated};
    res.send(userdata);
}
exports.getItems= async function(req,res)
{
    var user= req.params.user;
    var ItemsAre= await  dashboardService.getItems(user);
    console.log(ItemsAre);
    res.send(ItemsAre);
}
