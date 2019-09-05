const express = require("express");
const router = express.Router();

const { DB_URL } = require('../utils/config.json');
const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";
const url = DB_URL;

const validateRequest = require('./validateRequest');

router.post('/emailOrName', validateRequest, (req, res) => {
    console.log(res.permision)
    try {
        if (res.permision == true) {
            let searchTerm = req.body.searchTerm;          
            

            const regexp = new RegExp(searchTerm,'g');

            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("mordict");
                
                dbo.collection("users").find({ email: regexp}).toArray(function (err, result) {
                    if (err) throw err;
                    res.send(result);
                    console.log(result.length);
                    db.close()
                }); 
            });


        } else {
            res.send({error:'use can not search in this page'})
        }
    } catch (err) {
        console.log(err)
        res.send({error:err})
    }
})

module.exports = router;