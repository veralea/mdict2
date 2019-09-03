const express = require("express");
const router = express.Router();
const jwt = require('jwt-simple');
const secret = require('../utils/config').myprivatekey;
const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";
const url =
  "mongodb://mordict-6518:V5p6ZxwtJnGrKVSPCcogji6nURiR0a@db-mordict-6518.nodechef.com:5421/mordict";




router.post("/register", (req, res) => {

  // validate the request body first
  console.log('login')
  console.log(req.body);

  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mordict");

    if (req.body.email) {

      dbo
        .collection("users")
        .findOne({ email: req.body.email }, function (err, result) {
          if (err) throw err;
          console.log(result)
          if (result !== null) {
            res.send({ error: "email is allready registerd" });
           
          } else {
            //create new user
            let userObj = req.body;

            const hashPassword = jwt.encode(userObj.password, secret);
            userObj.password = hashPassword;
            delete userObj.password2;

            dbo.collection("users").insertOne(userObj, (err, result) => {
              if (err) throw err;
              console.log("user registerd");
              res.send({
                success: 'user registerd',
                isRegisterd:true
              })
            })
          }

          // res.send(result);
          db.close();
        });
    } else {
      res.send({error:'no email was given'})
    }
  });


});

router.post("/login",  (req, res) => {
  // console.log(req.cookies.mdict)
  try {
    if (Object.prototype.toString.call(req.body) !== "[object Object]")
      throw "request body is not an object";

    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      dbo
        .collection("users")
        .findOne({ email: req.body.email }, (err, result) => {
          if (err) throw err;

          if (result !== null) {
            console.log(result._id)
            try {
              //may brake if password is not encrypted
              let passwordFromDB = jwt.decode(result.password, secret);
              console.log(passwordFromDB)
              if (req.body.password === passwordFromDB) {
                //create hashed cookie with users permissions
                let userObj = {
                  id: result._id,
                  role:result.role || 'public'
                }
               
                let expires = 1000 * 60 * 60*24*3;
               
                res.cookie('mdict', jwt.encode(userObj, secret), { httpOnly: true, maxAge: expires });
                res.send({ success: "user match password" })
              } else {
                res.send({ error: "user do not match password" })
              }

            } catch (err) {
              console.log(err)
              res.send({error: 'password is inncorrect'})
            }

           
          } else {
            console.log("user is not in DataBase");
            res.send({ error: "User is not registerd" });
          }

          // res.send(result);
          db.close();
        })
    });

  } catch (err) {
    console.log(err);
    console.dir(req.body);
  }
});

router.post("/isLogged", (req, res) => { 
  console.log(req.cookies.mdict)
  try {
    if (req.cookies.mdict) {
      let cookie = jwt.decode(req.cookies.mdict, secret);
      if (typeof cookie === 'object') {
        res.send({ success: 'you are logged in' })
      } else {
        res.send({ error: 'invalid cookie' })
      }
     
    } else {
      res.send({error:'no cookie suplied'})
    }

  } catch (err) {
    console.log(err)
  }
})

function routeTo(){

}
module.exports = router;
