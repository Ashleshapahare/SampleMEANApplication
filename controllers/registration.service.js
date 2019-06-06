const express = require('express')
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'db_core';

exports.registerUser = async function(user)
{
    //console.log("registration page");
     
          try {
            client =  await mongo.connect(url);
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            console.log("user:",user) ; 
            //let user = JSON.stringify();
            let user_id= user.user_id;
            let password= user.password;
            let userType= user.userType;

            let userObj={'user_id':user_id, 'password':password, 'userType':userType};
            var result = await db.collection("userMaster").insertOne(userObj,(err,res)=>
            {
              if(err) throw err;
              console.log("User Inserted")
            });
            //debugger  ;
            //console.log(JSON.stringify(result)) ;
        }
        catch (error) {
          console.log(error)
            
        }
        finally {
          
        }
    }
  