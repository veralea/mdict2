const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";
const url =
  "mongodb://mordict-6518:V5p6ZxwtJnGrKVSPCcogji6nURiR0a@db-mordict-6518.nodechef.com:5421/mordict";

//util
const validateUser = require("../utils/user").validateUser;

router.post("/register", async (req, res) => {
    // validate the request body first
    if (validateUser(req.body)) {
      console.log(req.body);   
  
      MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        
        dbo
          .collection("users")
          .findOne({ email: req.body.email }, function(err, result) {
            if (err) throw err;
            if(result === null){
              console.log('user is not registerd yet')
              //insert to DB
              dbo.collection('users').insertOne(req.body, (err, result)=>{
                if (err) throw err;
                console.log('user registerd')
                res.send({sucess:"new user registerd"});
              })
            } else{
              res.send({error:"User is allredy registerd"});
            }
  
            // res.send(result);
            db.close();
          });
      });
  
    
    } else {
      res.send({ error: "not a valid rgistration object" });
    }
  })


  router.post("/login", async(req, res)=>{
    console.log(req.body)
  })
  module.exports = router;