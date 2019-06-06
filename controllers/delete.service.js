const express = require('express')
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'db_core';

var ObjectID = require('mongodb').ObjectID;

exports.deleteItems = async function(id)
{
       const client = await  mongo.connect(url);
       const db = client.db(dbName);
       const _id = new ObjectID(id);
       let query= {"_id": _id};
       console.log(query);

       var result = await db.collection("Items").deleteOne(query,(err,res)=>
       {
         if(err) throw err;
         console.log("Items Deleted")
       });
    }