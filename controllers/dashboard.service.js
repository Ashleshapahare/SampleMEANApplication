const express = require('express')
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'db_core';

exports.getItems = async function()
{
    console.log("starting autheticate in service");
     
          try {
            client =  await mongo.connect(url);
            console.log("Connected correctly to server");

            const db = client.db(dbName);

            var result = await db.collection("Items").find().toArray();
            return result;
          }
          catch(error)
          {
            
          }
    }



   // console.log(userData) ;
