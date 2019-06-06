var dashboardService = require("./dashboard.service") ;
var userService= require("./user.service");
var registrationService= require("./registration.service");
var deleteService= require("./delete.service");


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
exports.registerUser= async function(req)
{
    console.log(req);
    await registrationService.registerUser(req.body);
}
exports.deleteItems= async function(req,res)
{
    var id= req.params.id;
    var deleteItems= await deleteService.deleteItems(id);
    res.send(deleteItems);
    
}
