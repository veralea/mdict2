const express = require("express");
const router = express.Router();

const { DB_URL } = require('../utils/config.json');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectID;
// const url = "mongodb://localhost:27017/";
const url = DB_URL;

const validateRequest = require('./validateRequest');

router.post('/roleNExpDate', validateRequest, (req, res) => {
    console.log(res.permision)
    if (res.permision == true) {
        
        let roleAndExpDate = req.body;
        console.log(roleAndExpDate)

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("mordict");

            const myquery = { _id: new ObjectId(roleAndExpDate._id) };
            const newvalues = { $set: { role: roleAndExpDate.role, expDate: roleAndExpDate.expDate } };

            dbo.collection("users").updateOne(myquery, newvalues, function (err, resultsDB) {
                if (err) throw err;
                console.log(`${resultsDB.matchedCount} document updated`);
                db.close();
                res.send({ success: "1 document updated"})
            });
        });
    } else {
        res.send({error:'user do save to db '})
    }
 })

module.exports = router;