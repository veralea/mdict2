const express = require("express");
const router = express.Router();

const { DB_URL } = require('../utils/config.json');
const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";
const url = DB_URL;

const validateRequest = require('./validateRequest');

router.post('/emailOrName', validateRequest, (req, res) => {
    try {
        if (res.permision == true) {
            const searchTerm = req.body.searchTerm;

            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("mordict");

                dbo.collection("users").find({}).toArray(function (err, result) {
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
    }
})

module.exports = router;