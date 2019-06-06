const express = require('express')
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'db_core';

exports.authenticate = async function(query)
{
    console.log("starting autheticate in service");
     
          try {
            client =  await mongo.connect(url);
            console.log("Connected correctly to server");
            const db = client.db(dbName);
           // console.log(db) ; 
            //let query = {"user_id":"testuser1", "password":"test123"} ;
            var result = await db.collection("userMaster").find(query).toArray();
            //debugger  ;
            //console.log(JSON.stringify(result)) ;

            if (result.length>0)
             {
             return true;
              }
              else{
                return false;
              }
        } 
        catch (error) {
            
        }
        
    
    }



   // console.log(userData) ;
