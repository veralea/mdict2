const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";
const url =
  "mongodb://mordict-6518:V5p6ZxwtJnGrKVSPCcogji6nURiR0a@db-mordict-6518.nodechef.com:5421/mordict";

//util
const validateUser = require("./utils/user").validateUser;
const authRouter = require('./routing/auth');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Привет");
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mordict");

  dbo.createCollection("roots", function(err, res) {
    if (err) throw err;
    console.log("Collection roots created!");
    //   db.close();
  });

  dbo.createCollection("translations", function(err, res) {
    if (err) throw err;
    console.log("Collection translations created!");
    // db.close();
  });
  dbo.createCollection("phrases", function(err, res) {
    if (err) throw err;
    console.log("Collection phrases created!");
    // db.close();
  });
  dbo.createCollection("families", function(err, res) {
    if (err) throw err;
    console.log("Collection families created!");
    // db.close();
  });
  dbo.createCollection("familiesverbs", function(err, res) {
    if (err) throw err;
    console.log("Collection familiesverbs created!");
    // db.close();
  });
  dbo.createCollection("antonyms", function(err, res) {
    if (err) throw err;
    console.log("Collection antonyms created!");
    // db.close();
  });
  dbo.createCollection("synonyms", function(err, res) {
    if (err) throw err;
    console.log("Collection synonyms created!");
    // db.close();
  });

  dbo.createCollection("activepassives", function(err, res) {
    if (err) throw err;
    console.log("Collection activepassives created!");
    db.close();
  });
});

app.use("/auth", authRouter);

// app.post("/register", async (req, res) => {
//   // validate the request body first
//   if (validateUser(req.body)) {
//     console.log(req.body);

//     // let user = await User.findOne({ email: req.body.email });
//     // console.log("user", user);
//     // if (user) return res.status(400).send("User already registered.");

//     MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//       if (err) throw err;
//       var dbo = db.db("mordict");
      
//       dbo
//         .collection("users")
//         .findOne({ email: req.body.email }, function(err, result) {
//           if (err) throw err;
//           if(result === null){
//             console.log('user is not registerd yet')
//             //insert to DB
//             dbo.collection('users').insertOne(req.body, (err, result)=>{
//               if (err) throw err;
//               console.log('user registerd')
//               res.send({sucess:"new user registerd"});
//             })
//           } else{
//             res.send({error:"User is allredy registerd"});
//           }

//           // res.send(result);
//           db.close();
//         });
//     });

  
//   } else {
//     res.send({ error: "not a valid rgistration object" });
//   }
// });

app.get("/countroots/", (req, res) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    var ObjectID = require("mongodb").ObjectID;
    dbo
      .collection("roots")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result.length);
        db.close();
      });
  });
});

// app.get("/gettranslation/:_id", (req, res) => {
//   const _id = req.params._id;

//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mordict");
//     var ObjectID = require("mongodb").ObjectID;
//     dbo
//       .collection("translations")
//       .find({ _id: ObjectID(_id) })
//       .toArray(function(err, result) {
//         if (err) throw err;
//         res.send(result);
//         console.log(result);
//         db.close();
//       });
//   });
// });

// get one

app.get("/getroot/:root_id", (req, res) => {
  const root_id = req.params.root_id;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    dbo
      .collection("roots")
      .find({ root_id: root_id })
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result.root_id);
        db.close();
      });
  });
});

//get many

app.get("/gettranslations/:root_id", (req, res) => {
  const root_id = req.params.root_id;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    dbo
      .collection("roots")
      .find({ root_id: root_id })
      .toArray(function(err, result) {
        if (err) throw err;
        console.dir(result);
        res.send(result);
        db.close();
      });
  });
});

app.get("/getpassive/:root_id", (req, res) => {
  const root_id = req.params.root_id;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    dbo
      .collection("roots")
      .find({ root_id: root_id })
      .toArray(function(err, result) {
        if (err) throw err;
        console.dir(result);
        res.send(result);
        db.close();
      });
  });
});
app.get("/getactive/:root_id", (req, res) => {
  const root_id = req.params.root_id;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    dbo
      .collection("roots")
      .find({ root_id: root_id })
      .toArray(function(err, result) {
        if (err) throw err;
        console.dir(result);
        res.send(result);
        db.close();
      });
  });
});


app.get("/getfamilies/:root_id", (req, res) => {
  const root_id = req.params.root_id;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    dbo
      .collection("roots")
      .find({ root_id: root_id })
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
});

app.get("/getfamiliesverbs/:root_id", (req, res) => {
  const root_id = req.params.root_id;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");

    dbo
      .collection("roots")
      .find({ root_id: root_id })
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
});

app.get("/getsynonyms/:root_id", (req, res) => {
  const root_id = req.params.root_id;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    dbo
      .collection("roots")
      .find({ root_id: root_id })
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
});

app.get("/getantonyms/:root_id", (req, res) => {
  const root_id = req.params.root_id;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    dbo
      .collection("roots")
      .find({ root_id: root_id })
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
});

app.get("/getphrases/:root_id", (req, res) => {
  const root_id = req.params.root_id;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    dbo
      .collection("roots")
      .find({ root_id: root_id })
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
});


app.get("/getroots/:benjan/:letter1/:letter2/:letter3/:letter4", (req, res) => {
  const benjan = req.params.benjan;
  const letter1 = req.params.letter1;
  const letter2 = req.params.letter2;
  const letter3 = req.params.letter3;
  const letter4 = req.params.letter4;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    var query = {
      benjan: benjan,
      letter1: letter1,
      letter2: letter2,
      letter3: letter3,
      letter4: letter4
    };
    dbo
      .collection("roots")
      .find(query)
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        console.dir(result);
        db.close();
      });
  });
});
app.get("/getverbsbyletters/:root_id/:letter1/:letter2/:letter3/:letter4", (req, res) => {
  const root_id = req.params.root_id;
  const letter1 = req.params.letter1;
  const letter2 = req.params.letter2;
  const letter3 = req.params.letter3;
  const letter4 = req.params.letter4;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    var query = {
      root_id: {$ne:root_id},
      letter1: letter1,
      letter2: letter2,
      letter3: letter3,
      letter4: letter4
    };
    dbo
      .collection("roots")
      .find(query)
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        console.dir(result);
        db.close();
      });
  });
});

////////////////////////////////////////////////////////////////////////
// for update roots numbers

app.put("/updateallrootnumbers/", (req, res)=>{
  var rootIds = [];
  
   function one() {
    return new Promise(resolve => {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var query = {$or:[{root_id:"770"},{root_id:"5298"}]};
        dbo.collection("roots").find(query).toArray(function(err, results) {
           if (err) throw err;
           results.map((result,key)=>{
            let n = String(key+1);
            let s = n+".wav";
            let tr=[];
            result.translations.map((translation)=>{
              let s1S = n+"S_1_"+String(translation.translationId)+".wav";
              tr.push({
                translationId: translation.translationId, preposition: translation.preposition, translateRu: translation.translateRu, translateEn: translation.translateEn,
                translateFr: translation.translateFr, sentence: translation.sentence, sentence1: translation.sentence1, sentence2: translation.sentence2,
                sentence3: translation.sentence3,
                sentence1TranslateRu: translation.sentence1TranslateRu,
                sentence2TranslateRu: translation.sentence2TranslateRu,
                sentence3TranslateRu: translation.sentence3TranslateRu,
                sentenceTranslateRu: translation.sentenceTranslateRu,
                sentenceTranslateEn: translation.sentenceTranslateEn,
                sentence1TranslateEn: translation.sentence1TranslateEn,
                sentence2TranslateEn: translation.sentence2TranslateEn,
                sentence3TranslateEn: translation.sentence3TranslateEn,
                sentenceTranslateFr: translation.sentenceTranslateFr,
                sentence1TranslateFr: translation.sentence1TranslateFr,
                sentence2TranslateFr: translation.sentence2TranslateFr,
                sentence3TranslateFr: translation.sentence3TranslateFr,
                sentenceSound: translation.sentenceSound,
                sentence1Sound:s1S,
                sentence2Sound:n+"S_2_"+translation.translationId+".wav",
                sentence3Sound:n+"S_3_"+translation.translationId+".wav"
              });
              resolve();
            });
            rootIds.push({
              root_id:result.root_id,
              sound: s,
              translations:tr
            }); 
          });  
            console.dir(rootIds);
            console.log("one"); 
           db.close();
                 
        }); 
      })  
    });
  }
  
  function two() {
    
    return new Promise(resolve => {

      rootIds.map((rootId,key)=>{
        let num = String(key+1);
        // let num = "770";
        let root_id_old = rootId.root_id;
        let sound = rootId.sound;
        let translations = rootId.translations;
        console.log(num);
        console.log(root_id_old);
        console.log(sound);

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var query = {root_id:root_id_old};
        var newvalues ={
          $set:{
            root_id:num, 
            sound:sound,
            translations: translations
          }};
        var newactive ={$set:{active_id:num}};
        var newpassive = {$set:{passive_id:num}};
        dbo.collection("roots").updateMany(query,newvalues,function(err, results) {
          if (err) throw err;
           console.log("eight");   
       });
      //   dbo.collection("translations").updateMany(query,newvalues,function(err, results) {
      //     if (err) throw err;
      //      console.log("two");      
      //  });
      //   dbo.collection("synonyms").updateMany(query,newvalues,function(err, results) {
      //     if (err) throw err;
      //      console.log("three");      
      //  });
      //   dbo.collection("antonyms").updateMany(query,newvalues,function(err, results) {
      //     if (err) throw err;
      //      console.log("four");      
      //  });
      //   dbo.collection("families").updateMany(query,newvalues,function(err, results) {
      //     if (err) throw err;
      //      console.log("five");      
      //  });
      //   dbo.collection("familiesverbs").updateMany(query,newvalues,function(err, results) {
      //     if (err) throw err;
      //      console.log("six");    
      //  });
      //   dbo.collection("phrases").updateMany(query,newvalues,function(err, results) {
      //     if (err) throw err;
      //      console.log("seven");    
      //  });
      //   dbo.collection("activepassives").updateMany(query,newactive,function(err, results) {
      //     if (err) throw err;
      //      console.log("nine");     
      //  });
      //   dbo.collection("activepassives").updateMany(query,newpassive,function(err, results) {
      //     if (err) throw err;
      //      console.log("ten");
      //  }); 
       db.close();
       resolve();
      })

    });

    });
  }

  //  function three() {
    
  //   return new Promise(resolve => {

  //     rootIds.map((rootId,key)=>{
  //       let num = String(key+1);
  //       let sound = "";
  //      MongoClient.connect(url, function(err, db) {
  //        if (err) throw err;
  //        var dbo = db.db("mordict");
  //       var query = {root_id:rootId};
  //       var newvalues ={
  //         $set:{
  //           sound: sound
  //         }
  //       };
  //        dbo.collection("roots").updateOne(query,newvalues,function(err, result) {
  //          if (err) throw err;
  //           sound =  "1";
  //          console.log("three");
  //         db.close();
  //         resolve();      
  //       }); 
  //      })

  //    });

  //   });
  //  }
  // function four() {
  //   return new Promise(resolve => {
  //     rootIds.map((rootId,key)=>{
  //       let num = String(key+1);
  //     MongoClient.connect(url, function(err, db) {
  //       if (err) throw err;
  //       var dbo = db.db("mordict");
  //       var query = {root_id:rootId};
  //       var newvalues ={
  //         $set:{
  //           root_id:num
  //         }
  //       };
 
  //     })
  //   });
  //   });
  // }
  // function five() {
  //   return new Promise(resolve => {
  //     rootIds.map((rootId,key)=>{
  //       let num = key+1;
  //     MongoClient.connect(url, function(err, db) {
  //       if (err) throw err;
  //       var dbo = db.db("mordict");
  //       var query = {root_id:rootId};
  //       var newvalues ={
  //         $set:{
  //           root_id:toString(num)
  //         }
  //       };
  //       dbo.collection("families").updateMany(query,newvalues,function(err, results) {
  //         if (err) throw err;
  //          console.log("five");
  //         db.close();
  //         resolve();      
  //      }); 
  //     })
  //   });
  //   });
  // }
  
  // function six() {
  //   return new Promise(resolve => {
  //     rootIds.map((rootId,key)=>{
  //       let num = key+1;
  //     MongoClient.connect(url, function(err, db) {
  //       if (err) throw err;
  //       var dbo = db.db("mordict");
  //       var query = {root_id:rootId};
  //       var newvalues ={$set:{root_id:toString(num)}};
  //       dbo.collection("familiesverbs").updateMany(query,newvalues,function(err, results) {
  //         if (err) throw err;
  //          console.log("six");
  //         db.close();
  //         resolve();      
  //      }); 
  //     })
  //   });
  //   });
  // }
  // function seven() {
  //   return new Promise(resolve => {
  //     rootIds.map((rootId,key)=>{
  //       let num = key+1;
  //     MongoClient.connect(url, function(err, db) {
  //       if (err) throw err;
  //       var dbo = db.db("mordict");
  //       var query = {root_id:rootId};
  //       var newvalues ={$set:{root_id:toString(num)}};
  //       dbo.collection("phrases").updateMany(query,newvalues,function(err, results) {
  //         if (err) throw err;
  //          console.log("seven");
  //         db.close();
  //         resolve();      
  //      }); 
  //     })
  //   });
  //   });
  // }
  // function eight() {
  //   return new Promise(resolve => {
  //     rootIds.map((rootId,key)=>{
  //       let num = key+1;
  //     MongoClient.connect(url, function(err, db) {
  //       if (err) throw err;
  //       var dbo = db.db("mordict");
  //       var query = {root_id:rootId};
  //       var newvalues ={$set:{root_id:toString(num)}};
  //       dbo.collection("roots").updateMany(query,newvalues,function(err, results) {
  //         if (err) throw err;
  //          console.log("eight");
  //         db.close();
  //         resolve();      
  //      }); 
  //     })
  //   });
  //   });
  // }
  // function nine() {
  //   return new Promise(resolve => {
  //     rootIds.map((rootId,key)=>{
  //       let num = key+1;
  //     MongoClient.connect(url, function(err, db) {
  //       if (err) throw err;
  //       var dbo = db.db("mordict");
  //       var query = {active_id:rootId};
  //       var newvalues ={$set:{active_id:toString(num)}};
  //       dbo.collection("activepassives").updateMany(query,newvalues,function(err, results) {
  //         if (err) throw err;
  //          console.log("nine");
  //         db.close();
  //         resolve();      
  //      }); 
  //     })
  //   });
  //   });
  // }
  // function ten() {
  //   return new Promise(resolve => {
  //     rootIds.map((rootId,key)=>{
  //       let num = key+1;
  //     MongoClient.connect(url, function(err, db) {
  //       if (err) throw err;
  //       var dbo = db.db("mordict");
  //       var query = {passive_id:rootId};
  //       var newvalues ={$set:{passive_id:toString(num)}};
  //       dbo.collection("activepassives").updateMany(query,newvalues,function(err, results) {
  //         if (err) throw err;
  //          console.log("ten");
  //         db.close();
  //         resolve();      
  //      }); 
  //     })
  //   });
  //   });
  // }

  
  one().then(() => two())
  // .then(() => three())
  // .then(() => four())
  // .then(() => five()).then(() => six()).then(() => seven()).then(() => eight())
  // .then(() => nine()).then(() => ten())
  ;
   
});

app.get("/getrootsbysearch/:search", (req, res)=>{
  const search = req.params.search;
  var rootId = "";
  var translations = [];
  var synonyms = [];
  var antonyms = []; 
  var phrases = [];
  var families = [];
  var familiesverbs = [];
  var active_id = "_";
  var passive_id = "_"
   function one() {
    return new Promise(resolve => {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var query = {root_id:"4842"};//дописать множественный запрос "или" на все поля из "roots"
        dbo.collection("roots").findOne(query, function(err, results) {
           if (err) throw err;
           
            rootId = results.root_id;
            console.log(rootId);
            console.log("one"); 
           db.close();
           resolve();      
        }); 
 
      })  
    });
  }
  
  function two() {
    
    return new Promise(resolve => {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var query = {root_id: rootId};
        dbo.collection("translations").find(query).toArray(function(err, results) {
          if (err) throw err;
          results.map((result,key)=>{
            let num = key+1;
            translations.push({
              translationId: num,
              preposition: result.preposition,
              translateRu: result.translateRu,
              translateEn: result.translateEn,
              translateFr: result.translateFr,
              sentence: result.sentence,
              sentence1: result.sentence1,
              sentence2: result.sentence2,
              sentence3: result.sentence3,
              sentence1TranslateRu: result.sentence1TranslateRu,
              sentence2TranslateRu: result.sentence2TranslateRu,
              sentence3TranslateRu: result.sentence3TranslateRu,
              sentenceTranslateRu: result.sentenceTranslateRu,
              sentenceTranslateEn: result.sentenceTranslateEn,
              sentence1TranslateEn: result.sentence1TranslateEn,
              sentence2TranslateEn: result.sentence2TranslateEn,
              sentence3TranslateEn: result.sentence3TranslateEn,
              sentenceTranslateFr: result.sentenceTranslateFr,
              sentence1TranslateFr: result.sentence1TranslateFr,
              sentence2TranslateFr: result.sentence2TranslateFr,
              sentence3TranslateFr: result.sentence3TranslateFr,
              sentenceSound: result.sentenceSound,
              sentence1Sound: result.sentence1Sound,
              sentence2Sound: rootId+"S_2_"+ num + ".wav",
              sentence3Sound: rootId+"S_2_"+ num + ".wav"
            });
           });

           console.log("two");
          db.close();
          resolve();      
       }); 
      })
    });
  }

  function twoOne() {
    
    return new Promise(resolve => {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var query = {root_id: rootId};
        dbo.collection("synonyms").find(query).toArray(function(err, results) {
          if (err) throw err;
          results.map((result,key)=>{
            synonyms.push({
              synonymId: key+1,
              synonym: result.synonym,
              synonymTranslateRu: result.synonymTranslateRu,
              synonymTranslateEn: result.synonymTranslateEn,
              synonymTranslateFr: result.synonymTranslateFr
            });
           });

           console.log("twoOne");
          db.close();
          resolve();      
       }); 
      })
    });
  }

  function twoTwo() {
    
    return new Promise(resolve => {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var query = {root_id: rootId};
        dbo.collection("antonyms").find(query).toArray(function(err, results) {
          if (err) throw err;
          results.map((result,key)=>{
            antonyms.push({
              antonymId: key+1,
              antonym: result.antonym,
              antonymTranslateRu: result.antonymTranslateRu,
              antonymTranslateEn: result.antonymTranslateEn,
              antonymTranslateFr: result.antonymTranslateFr
            });
           });

           console.log("twoTwo");
          db.close();
          resolve();      
       }); 
      })
    });
  }

  function twoThree() {
    
    return new Promise(resolve => {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var query = {root_id: rootId};
        dbo.collection("phrases").find(query).toArray(function(err, results) {
          if (err) throw err;
          results.map((result,key)=>{
            phrases.push({
              phraseId: key+1,
              phrase: result.phrase,
              phraseTranslateRu: result.phraseTranslateRu,
              phraseTranslateEn: result.phraseTranslateEn,
              phraseTranslateFr: result.phraseTranslateFr
            });
           });

           console.log("twoThree");
          db.close();
          resolve();      
       }); 
      })
    });
  }

  function twoFour() {
      return new Promise(resolve => {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var query = {active_id: rootId};
        dbo.collection("activepassives").find(query).toArray(function(err, results) {
          if (err) throw err;
          results.map((result)=>{
            passive_id = result.passive_id;
           });

           console.log("twoFour");
          db.close();
          resolve();      
       }); 
      })
    });
  }

  function twoFive() {
    return new Promise(resolve => {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var query = {passive_id: rootId};
      dbo.collection("activepassives").find(query).toArray(function(err, results) {
        if (err) throw err;
        results.map((result)=>{
          active_id = result.active_id;
         });

         console.log("twoFive");
        db.close();
        resolve();      
     }); 
    })
  });
}

function twoSix() {
    
  return new Promise(resolve => {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var query = {root_id: rootId};
      dbo.collection("families").find(query).toArray(function(err, results) {
        if (err) throw err;
        results.map((result,key)=>{
          families.push({
            familyId: key+1,
            family: result.family,
            familyPosition: result.familyPosition,
            familyTranslateRu: result.familyTranslateRu,
            familyTranslateEn: result.familyTranslateEn,
            familyTranslateFr: result.familyTranslateFr
          });
         });

         console.log("twoSix");
        db.close();
        resolve();      
     }); 
    })
  });
}

function twoSeven() {
    
  return new Promise(resolve => {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var query = {root_id: rootId};
      dbo.collection("familiesverbs").find(query).toArray(function(err, results) {
        if (err) throw err;
        results.map((result,key)=>{
          familiesverbs.push({
            familyverbId: key+1,
            familyverb: result.familyverb,
            familyverbPosition: result.familyverbPosition,
            familyverbTranslateRu: result.familyverbTranslateRu,
            familyverbTranslateEn: result.familyverbTranslateEn,
            familyverbTranslateFr: result.familyverbTranslateFr
          });
         });

         console.log("twoSeven");
        db.close();
        resolve();      
     }); 
    })
  });
}


  function three() {
    return new Promise(resolve => {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
          var dbo = db.db("mordict");
          var query = {root_id: rootId};
                let insertValue = {
                  $set:{
                    translations: translations,
                    synonyms: synonyms,
                    antonyms: antonyms,
                    phrases: phrases,
                    passive_id: passive_id,
                    active_id: active_id,
                    families: families,
                    familiesverbs: familiesverbs

                  }
                };
                dbo
                .collection("roots")
                .updateOne(query, insertValue, function(err, result) {
                  if (err) throw err;

                  console.log("three");
                  db.close();
                  resolve();
                });
        
       });
    
      });
  
  }
  
  function four(){
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var query = {root_id: rootId};
      dbo.collection("roots").find(query).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        console.dir(result);
        db.close();
      });  
    });
    //  
  }
  
  one().then(() => two()).then(() => twoOne()).then(() => twoTwo()).then(() => twoThree())
  .then(() => twoFour()).then(() => twoFive()).then(() => twoSix()).then(() => twoSeven()).then(() => three())
  .then(() => four());
  
       
});

app.get(
  "/getallsameroots/",
  (req,res) => {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require("mongodb").ObjectID;
      dbo.collection("roots")
      .aggregate([{$group : {_id : "$root_id", same_root_id : {$sum : 1}}}])
      .toArray(function(err, results1) {
        if (err) throw err;
        res.send(results1);
        var fs = require('fs');
        var filename = 'output.txt';
        var str = JSON.stringify(results1, null, 4);
        
        fs.writeFile(filename, str, function(err){
            if(err) {
                console.log(err)
            } else {
                console.log('File written!');
                
            }
        });

       });
    });
  }  
);
app.put("/updatealltranslations/",(req, res) => {
  var sentence1 = "";
  var sentence1TranslateRu = "";
  var sentence1TranslateEn = "";
  var sentence1TranslateFr = "";
  var sentence1Sound = "";
  var translateEn = "";
  var rootId = "";
   function one() {
    return new Promise(resolve => {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mordict");
        var query = {$or:[{sentence1:"_"},{ 'sentence1' : { '$exists' : false}}]};
        dbo.collection("translations").findOne(query,function(err, results) {
           if (err) throw err;

            sentence1 = results.sentence;
            sentence1TranslateRu = results.sentenceTranslateRu;
            sentence1TranslateEn = results.sentenceTranslateEn;
            sentence1TranslateFr = results.sentenceTranslateFr;
            sentence1Sound = results.sentenceSound;
            translateEn = results.translateEn;
            rootId = results.root_id;
            console.log(results.sentence);
            console.log(results.translateEn);
            console.log("one"); 
           db.close();
           resolve();      
        }); 
      })  
    });
  }

  function two() {
    return new Promise(resolve => {

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
          var dbo = db.db("mordict");
          var query = {translateEn: translateEn, root_id: rootId};
                let insertValue = {
                  $set:{
                    sentence1: sentence1,
                    sentence1TranslateRu: sentence1TranslateRu,
                    sentence1TranslateEn: sentence1TranslateEn,
                    sentence1TranslateFr: sentence1TranslateFr,
                    sentence1Sound: sentence1Sound
                  }
                };
                dbo.collection("translations").updateOne(query, insertValue, function(err, result) {
                  if (err) throw err;
                  console.log("two");
                  db.close();
                  res.send(result);
                });
       });



      });
  }
  one().then(() => two());
  // setInterval(one().then(() => two()), 20000);   
});

//update

app.put('/updatetranslation/:root_id/:translationId/:preposition/:translateRu/:translateEn/:translateFr/:sentence1/:sentence2/:sentence3'+
'/:sentence1TranslateRu/:sentence2TranslateRu/:sentence3TranslateRu'+
'/:sentence1TranslateEn/:sentence2TranslateEn/:sentence3TranslateEn'+
'/:sentence1TranslateFr/:sentence2TranslateFr/:sentence3TranslateFr',(req, res) =>{
   const root_id = req.params.root_id;
   const translationId = Number(req.params.translationId);
   const preposition = req.params.preposition;
   const translateRu = req.params.translateRu;
   const translateEn = req.params.translateEn;
   const translateFr = req.params.translateFr;
   const sentence1 = req.params.sentence1;
   const sentence2 = req.params.sentence2;
   const sentence3 = req.params.sentence3;
   const sentence1TranslateRu = req.params.sentence1TranslateRu; 
   const sentence2TranslateRu = req.params.sentence2TranslateRu;
   const sentence3TranslateRu = req.params.sentence3TranslateRu;
   const sentence1TranslateEn = req.params.sentence1TranslateEn; 
   const sentence2TranslateEn = req.params.sentence2TranslateEn;
   const sentence3TranslateEn = req.params.sentence3TranslateEn;  
   const sentence1TranslateFr = req.params.sentence1TranslateFr; 
   const sentence2TranslateFr = req.params.sentence2TranslateFr; 
   const sentence3TranslateFr = req.params.sentence3TranslateFr; 
   MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require('mongodb').ObjectID;
      var newvalues = {
        translationId: translationId,
         preposition: preposition,
         translateRu: translateRu,
         translateEn: translateEn,
         translateFr: translateFr,
         sentence: sentence1,
         sentence1: sentence1,
         sentence2: sentence2,
         sentence3: sentence3,
         sentenceTranslateRu: sentence1TranslateRu,
         sentence1TranslateRu: sentence1TranslateRu,
         sentence2TranslateRu: sentence2TranslateRu,
         sentence3TranslateRu: sentence3TranslateRu,
         sentenceTranslateEn: sentence1TranslateEn,
         sentence1TranslateEn: sentence1TranslateEn,
         sentence2TranslateEn: sentence2TranslateEn,
         sentence3TranslateEn: sentence3TranslateEn,
         sentenceTranslateFr: sentence1TranslateFr,
         sentence1TranslateFr: sentence1TranslateFr,  
         sentence2TranslateFr: sentence2TranslateFr, 
         sentence3TranslateFr: sentence3TranslateFr,
         sentenceSound: root_id+"S_"+translationId  
     };

      dbo.collection("roots")
      .updateOne({root_id:root_id, "translations.translationId":translationId}, {$set:{"translations.$":newvalues}}, function(err, result) {
        if (err) throw err;
        console.dir(result);
        res.send(result);
        db.close();
      });
    });
})

app.put("/updateallfamilies/",(req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    var ObjectID = require("mongodb").ObjectID;
    var myquery = {familyPosition:{$exists: false}};
    var newvalues = {
      $set: {

        familyPosition: "_"
      }
    };
    dbo
      .collection("families")
      .updateMany(myquery, newvalues, function(err, result) {
        if (err) throw err;
        console.log("1 family updated");
        res.send(result);
        db.close();
      });
    });
  }
);
app.put("/updateallfamiliesverb/",(req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    var ObjectID = require("mongodb").ObjectID;
    var myquery = {familyverbPosition:{$exists:false}};
    var newvalues = {
      $set: {

        familyverbPosition: "_"
      }
    };
    dbo
      .collection("familiesverbs")
      .updateMany(myquery, newvalues, function(err, result) {
        if (err) throw err;
        console.log("1 familyverb updated");
        res.send(result);
        db.close();
      });
    });
  }
);

app.put(
  "/updatefamily/:root_id/:familyId/:family/:familyPosition/:familyTranslateRu/:familyTranslateEn/:familyTranslateFr",
  (req, res) => {
    const root_id = req.params.root_id;
    const familyId = Number(req.params.familyId);
    const family = req.params.family;
    const familyPosition = req.params.familyPosition;
    const familyTranslateRu = req.params.familyTranslateRu;
    const familyTranslateEn = req.params.familyTranslateEn;
    const familyTranslateFr = req.params.familyTranslateFr;    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var newvalues = {
          familyId: familyId,
          family: family,
          familyPosition: familyPosition,
          familyTranslateRu: familyTranslateRu,
          familyTranslateEn: familyTranslateEn,
          familyTranslateFr: familyTranslateFr        
      };
       dbo.collection("roots")
       .updateOne({root_id:root_id, "families.familyId":familyId}, {$set:{"families.$":newvalues}}, function(err, result) {
          if (err) throw err;
          console.log("1 family updated");
          res.send(result);
          db.close();
        });
      });
    }
  );

app.put(
  "/updatefamilyverb/:root_id/:familyverbId/:familyverb/:familyverbPosition/:familyverbTranslateRu/:familyverbTranslateEn/:familyverbTranslateFr",
  (req, res) => {
    const root_id = req.params.root_id;
    const familyverbId = Number(req.params.familyverbId);
    const familyverb = req.params.familyverb;
    const familyverbPosition = req.params.familyverbPosition;
    const familyverbTranslateRu = req.params.familyverbTranslateRu;
    const familyverbTranslateEn = req.params.familyverbTranslateEn;
    const familyverbTranslateFr = req.params.familyverbTranslateFr;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var newvalues = {
          familyverbId: familyverbId,
          familyverb: familyverb,
          familyverbPosition: familyverbPosition,
          familyverbTranslateRu: familyverbTranslateRu,
          familyverbTranslateEn: familyverbTranslateEn,
          familyverbTranslateFr: familyverbTranslateFr
      };
      dbo.collection("roots")
      .updateOne({root_id:root_id, "familiesverbs.familyverbId":familyverbId}, {$set:{"familiesverbs.$":newvalues}}, function(err, result) {
          if (err) throw err;
          console.log("1 familyverb updated");
          res.send(result);
          db.close();
        });
    });
  }
);

app.put(
  "/updatesynonym/:root_id/:synonymId/:synonym/:synonymTranslateRu/:synonymTranslateEn/:synonymTranslateFr",
  (req, res) => {
    const root_id = req.params.root_id;
    const synonymId = Number(req.params.synonymId);
    const synonym = req.params.synonym;
    const synonymTranslateRu = req.params.synonymTranslateRu;
    const synonymTranslateEn = req.params.synonymTranslateEn;
    const synonymTranslateFr = req.params.synonymTranslateFr;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var newvalues = {
          synonymId: synonymId,
          synonym: synonym,
          synonymTranslateRu: synonymTranslateRu,
          synonymTranslateEn: synonymTranslateEn,
          synonymTranslateFr: synonymTranslateFr
      };
      dbo.collection("roots")
      .updateOne({root_id:root_id, "synonyms.synonymId":synonymId}, {$set:{"synonyms.$":newvalues}}, function(err, result) {
          if (err) throw err;
          console.log("1 synonym updated");
          res.send(result);
          db.close();
        });
    });
  }
);
app.put(
  "/updateantonym/:root_id/:antonymId/:antonym/:antonymTranslateRu/:antonymTranslateEn/:antonymTranslateFr",
  (req, res) => {
    const root_id = req.params.root_id;
    const antonymId = Number(req.params.antonymId);
    const antonym = req.params.antonym;
    const antonymTranslateRu = req.params.antonymTranslateRu;
    const antonymTranslateEn = req.params.antonymTranslateEn;
    const antonymTranslateFr = req.params.antonymTranslateFr;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var newvalues = {
          antonymId: antonymId,
          antonym: antonym,
          antonymTranslateRu: antonymTranslateRu,
          antonymTranslateEn: antonymTranslateEn,
          antonymTranslateFr: antonymTranslateFr
      };
      dbo.collection("roots")
      .updateOne({root_id:root_id, "antonyms.antonymId":antonymId}, {$set:{"antonyms.$":newvalues}}, function(err, result) {
          if (err) throw err;
          console.log("1 antonym updated");
          res.send(result);
          db.close();
        });
    });
  }
);
app.put(
  "/updatephrase/:root_id/:phraseId/:phrase/:phraseTranslateRu/:phraseTranslateEn/:phraseTranslateFr",
  (req, res) => {
    const root_id = req.params.root_id;
    const phraseId = Number(req.params.phraseId);
    const phrase = req.params.phrase;
    const phraseTranslateRu = req.params.phraseTranslateRu;
    const phraseTranslateEn = req.params.phraseTranslateEn;
    const phraseTranslateFr = req.params.phraseTranslateFr;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var newvalues = {
          phraseId: phraseId,
          phrase: phrase,
          phraseTranslateRu: phraseTranslateRu,
          phraseTranslateEn: phraseTranslateEn,
          phraseTranslateFr: phraseTranslateFr
      };
      dbo.collection("roots")
      .updateOne({root_id:root_id, "phrases.phraseId":phraseId}, {$set:{"phrases.$":newvalues}}, function(err, result) {
          if (err) throw err;
          console.log("1 phrase updated");
          res.send(result);
          db.close();
        });
    });
  }
);
app.put(
  "/updateforms/:root_id/:benjan/:letter1/:letter2/:letter3/:letter4/:descript/:sound/:inf/:infS/:p1s/:p1sS/:p2sm/:p2smS/:p2sw/:p2swS/:p3sm/:p3smS/" +
    ":p3sw/:p3swS/:p1m/:p1mS/:p2mm/:p2mmS/:p2mw/:p2mwS/:p3m/:p3mS/:nsm/:nsmS/:nsw/:nswS/:nmm/:nmmS/:nmw/:nmwS/:f1s" +
    "/:f1sS/:f2sm/:f2smS/:f2sw/:f2swS/:f3sm/:f3smS/:f3sw/:f3swS/:f1m/:f1mS/:f2mm/:f2mmS/:f2mw/:f2mwS/:f3m/:f3mS/:ism/:ismS/:isw" +
    "/:iswS/:imm/:immS/:imw/:imwS/:ns/:nsS/:nm/:nmS/:asm/:asmS/:asw/:aswS/:amm/:ammS/:amw/:amwS",
  (req, res) => {
    const root_id = req.params.root_id;
    const benjan = req.params.benjan;
    const letter1 = req.params.letter1;
    const letter2 = req.params.letter2;
    const letter3 = req.params.letter3;
    const letter4 = req.params.letter4;
    const descript = req.params.descript;
    const sound = req.params.sound;
    const inf = req.params.inf;
    const infS = req.params.infS;
    const p1s = req.params.p1s;
    const p1sS = req.params.p1sS;
    const p2sm = req.params.p2sm;
    const p2smS = req.params.p2smS;
    const p2sw = req.params.p2sw;
    const p2swS = req.params.p2swS;
    const p3sm = req.params.p3sm;
    const p3smS = req.params.p3smS;
    const p3sw = req.params.p3sw;
    const p3swS = req.params.p3swS;
    const p1m = req.params.p1m;
    const p1mS = req.params.p1mS;
    const p2mm = req.params.p2mm;
    const p2mmS = req.params.p2mmS;
    const p2mw = req.params.p2mw;
    const p2mwS = req.params.p2mwS;
    const p3m = req.params.p3m;
    const p3mS = req.params.p3mS;
    const nsm = req.params.nsm;
    const nsmS = req.params.nsmS;
    const nsw = req.params.nsw;
    const nswS = req.params.nswS;
    const nmm = req.params.nmm;
    const nmmS = req.params.nmmS;
    const nmw = req.params.nmw;
    const nmwS = req.params.nmwS;
    const f1s = req.params.f1s;
    const f1sS = req.params.f1sS;
    const f2sm = req.params.f2sm;
    const f2smS = req.params.f2smS;
    const f2sw = req.params.f2sw;
    const f2swS = req.params.f2swS;
    const f3sm = req.params.f3sm;
    const f3smS = req.params.f3smS;
    const f3sw = req.params.f3sw;
    const f3swS = req.params.f3swS;
    const f1m = req.params.f1m;
    const f1mS = req.params.f1mS;
    const f2mm = req.params.f2mm;
    const f2mmS = req.params.f2mmS;
    const f2mw = req.params.f2mw;
    const f2mwS = req.params.f2mwS;
    const f3m = req.params.f3m;
    const f3mS = req.params.f3mS;
    const ism = req.params.ism;
    const ismS = req.params.ismS;
    const isw = req.params.isw;
    const iswS = req.params.iswS;
    const imm = req.params.imm;
    const immS = req.params.immS;
    const imw = req.params.imw;
    const imwS = req.params.imwS;
    const ns = req.params.ns;
    const nsS = req.params.nsS;
    const nm = req.params.nm;
    const nmS = req.params.nmS;
    const asm = req.params.asm;
    const asmS = req.params.asmS;
    const asw = req.params.asw;
    const aswS = req.params.aswS;
    const amm = req.params.amm;
    const ammS = req.params.ammS;
    const amw = req.params.amw;
    const amwS = req.params.amwS;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var myquery = { root_id: root_id };
      var newvalues = {
        $set: {
          benjan: benjan,
          letter1: letter1,
          letter2: letter2,
          letter3: letter3,
          letter4: letter4,
          descript: descript,
          sound: sound,
          inf: inf,
          infS: infS,
          p1s: p1s,
          p1sS: p1sS,
          p2sm: p2sm,
          p2smS: p2smS,
          p2sw: p2sw,
          p2swS: p2swS,
          p3sm: p3sm,
          p3smS: p3smS,
          p3sw: p3sw,
          p3swS: p3swS,
          p1m: p1m,
          p1mS: p1mS,
          p2mm: p2mm,
          p2mmS: p2mmS,
          p2mw: p2mw,
          p2mwS: p2mwS,
          p3m: p3m,
          p3mS: p3mS,
          nsm: nsm,
          nsmS: nsmS,
          nsw: nsw,
          nswS: nswS,
          nmm: nmm,
          nmmS: nmmS,
          nmw: nmw,
          nmwS: nmwS,
          f1s: f1s,
          f1sS: f1sS,
          f2sm: f2sm,
          f2smS: f2smS,
          f2sw: f2sw,
          f2swS: f2swS,
          f3sm: f3sm,
          f3smS: f3smS,
          f3sw: f3sw,
          f3swS: f3swS,
          f1m: f1m,
          f1mS: f1mS,
          f2mm: f2mm,
          f2mmS: f2mmS,
          f2mw: f2mw,
          f2mwS: f2mwS,
          f3m: f3m,
          f3mS: f3mS,
          ism: ism,
          ismS: ismS,
          isw: isw,
          iswS: iswS,
          imm: imm,
          immS: immS,
          imw: imw,
          imwS: imwS,
          ns: ns,
          nsS: nsS,
          nm: nm,
          nmS: nmS,
          asm: asm,
          asmS: asmS,
          asw: asw,
          aswS: aswS,
          amm: amm,
          ammS: ammS,
          amw: amw,
          amwS: amwS
        }
      };
      dbo
        .collection("roots")
        .updateOne(myquery, newvalues, function(err, result) {
          if (err) throw err;
          console.log("1 document updated");
          res.send(result);
          db.close();
        });
    });
  }
);

//insert new

app.post(
  "/newroot/:root_id/:benjan/:letter1/:letter2/:letter3/:letter4/:descript/:sound/:inf/:infS/:p1s/:p1sS/:p2sm/:p2smS/:p2sw/:p2swS/:p3sm/:p3smS/" +
    ":p3sw/:p3swS/:p1m/:p1mS/:p2mm/:p2mmS/:p2mw/:p2mwS/:p3m/:p3mS/:nsm/:nsmS/:nsw/:nswS/:nmm/:nmmS/:nmw/:nmwS/:f1s" +
    "/:f1sS/:f2sm/:f2smS/:f2sw/:f2swS/:f3sm/:f3smS/:f3sw/:f3swS/:f1m/:f1mS/:f2mm/:f2mmS/:f2mw/:f2mwS/:f3m/:f3mS/:ism/:ismS/:isw" +
    "/:iswS/:imm/:immS/:imw/:imwS/:ns/:nsS/:nm/:nmS/:asm/:asmS/:asw/:aswS/:amm/:ammS/:amw/:amwS",
  (req, res) => {
    const root_id = req.params.root_id;
    const benjan = req.params.benjan;
    const letter1 = req.params.letter1;
    const letter2 = req.params.letter2;
    const letter3 = req.params.letter3;
    const letter4 = req.params.letter4;
    const descript = req.params.descript;
    const sound = req.params.sound;
    const inf = req.params.inf;
    const infS = req.params.infS;
    const p1s = req.params.p1s;
    const p1sS = req.params.p1sS;
    const p2sm = req.params.p2sm;
    const p2smS = req.params.p2smS;
    const p2sw = req.params.p2sw;
    const p2swS = req.params.p2swS;
    const p3sm = req.params.p3sm;
    const p3smS = req.params.p3smS;
    const p3sw = req.params.p3sw;
    const p3swS = req.params.p3swS;
    const p1m = req.params.p1m;
    const p1mS = req.params.p1mS;
    const p2mm = req.params.p2mm;
    const p2mmS = req.params.p2mmS;
    const p2mw = req.params.p2mw;
    const p2mwS = req.params.p2mwS;
    const p3m = req.params.p3m;
    const p3mS = req.params.p3mS;
    const nsm = req.params.nsm;
    const nsmS = req.params.nsmS;
    const nsw = req.params.nsw;
    const nswS = req.params.nswS;
    const nmm = req.params.nmm;
    const nmmS = req.params.nmmS;
    const nmw = req.params.nmw;
    const nmwS = req.params.nmwS;
    const f1s = req.params.f1s;
    const f1sS = req.params.f1sS;
    const f2sm = req.params.f2sm;
    const f2smS = req.params.f2smS;
    const f2sw = req.params.f2sw;
    const f2swS = req.params.f2swS;
    const f3sm = req.params.f3sm;
    const f3smS = req.params.f3smS;
    const f3sw = req.params.f3sw;
    const f3swS = req.params.f3swS;
    const f1m = req.params.f1m;
    const f1mS = req.params.f1mS;
    const f2mm = req.params.f2mm;
    const f2mmS = req.params.f2mmS;
    const f2mw = req.params.f2mw;
    const f2mwS = req.params.f2mwS;
    const f3m = req.params.f3m;
    const f3mS = req.params.f3mS;
    const ism = req.params.ism;
    const ismS = req.params.ismS;
    const isw = req.params.isw;
    const iswS = req.params.iswS;
    const imm = req.params.imm;
    const immS = req.params.immS;
    const imw = req.params.imw;
    const imwS = req.params.imwS;
    const ns = req.params.ns;
    const nsS = req.params.nsS;
    const nm = req.params.nm;
    const nmS = req.params.nmS;
    const asm = req.params.asm;
    const asmS = req.params.asmS;
    const asw = req.params.asw;
    const aswS = req.params.aswS;
    const amm = req.params.amm;
    const ammS = req.params.ammS;
    const amw = req.params.amw;
    const amwS = req.params.amwS;

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var newroot = {
        root_id: root_id,
        benjan: benjan,
        letter1: letter1,
        letter2: letter2,
        letter3: letter3,
        letter4: letter4,
        descript: descript,
        sound: sound,
        inf: inf,
        infS: infS,
        p1s: p1s,
        p1sS: p1sS,
        p2sm: p2sm,
        p2smS: p2smS,
        p2sw: p2sw,
        p2swS: p2swS,
        p3sm: p3sm,
        p3smS: p3smS,
        p3sw: p3sw,
        p3swS: p3swS,
        p1m: p1m,
        p1mS: p1mS,
        p2mm: p2mm,
        p2mmS: p2mmS,
        p2mw: p2mw,
        p2mwS: p2mwS,
        p3m: p3m,
        p3mS: p3mS,
        nsm: nsm,
        nsmS: nsmS,
        nsw: nsw,
        nswS: nswS,
        nmm: nmm,
        nmmS: nmmS,
        nmw: nmw,
        nmwS: nmwS,
        f1s: f1s,
        f1sS: f1sS,
        f2sm: f2sm,
        f2smS: f2smS,
        f2sw: f2sw,
        f2swS: f2swS,
        f3sm: f3sm,
        f3smS: f3smS,
        f3sw: f3sw,
        f3swS: f3swS,
        f1m: f1m,
        f1mS: f1mS,
        f2mm: f2mm,
        f2mmS: f2mmS,
        f2mw: f2mw,
        f2mwS: f2mwS,
        f3m: f3m,
        f3mS: f3mS,
        ism: ism,
        ismS: ismS,
        isw: isw,
        iswS: iswS,
        imm: imm,
        immS: immS,
        imw: imw,
        imwS: imwS,
        ns: ns,
        nsS: nsS,
        nm: nm,
        nmS: nmS,
        asm: asm,
        asmS: asmS,
        asw: asw,
        aswS: aswS,
        amm: amm,
        ammS: ammS,
        amw: amw,
        amwS: amwS
      };
      dbo.collection("roots").insertOne(newroot, function(err, result) {
        if (err) throw err;
        console.log("1 document insered");
        res.send(result);
        db.close();
      });
    });
  }
);

app.post(
  "/newtranslation/:root_id/:translationId/:preposition/:translateRu/:translateEn/:translateFr"+
  "/:sentence1/:sentence2/:sentence3/:sentence1TranslateRu/:sentence2TranslateRu/:sentence3TranslateRu" +
    "/:sentence1TranslateEn/:sentence2TranslateEn/:sentence3TranslateEn/:sentence1TranslateFr/:sentence2TranslateFr"
    +"/:sentence3TranslateFr/:sentence1Sound/:sentence2Sound/:sentence3Sound",
  (req, res) => {
    const root_id = req.params.root_id;
    const translationId = Number(req.params.translationId);
    const preposition = req.params.preposition;
    const translateRu = req.params.translateRu;
    const translateEn = req.params.translateEn;
    const translateFr = req.params.translateFr;
    const sentence1 = req.params.sentence1;
    const sentence2 = req.params.sentence2;
    const sentence3 = req.params.sentence3;
    const sentence1TranslateRu = req.params.sentence1TranslateRu;
    const sentence2TranslateRu = req.params.sentence2TranslateRu;
    const sentence3TranslateRu = req.params.sentence3TranslateRu;
    const sentence1TranslateEn = req.params.sentence1TranslateEn;
    const sentence2TranslateEn = req.params.sentence2TranslateEn;
    const sentence3TranslateEn = req.params.sentence3TranslateEn;
    const sentence1TranslateFr = req.params.sentence1TranslateFr;
    const sentence2TranslateFr = req.params.sentence2TranslateFr;
    const sentence3TranslateFr = req.params.sentence3TranslateFr;
    const sentence1Sound = req.params.sentence1Sound;
    const sentence2Sound = req.params.sentence2Sound;
    const sentence3Sound = req.params.sentence3Sound;

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var newtranslation = {
        translationId: translationId,
        preposition: preposition,
        translateRu: translateRu,
        translateEn: translateEn,
        translateFr: translateFr,
        sentence1: sentence1,
        sentence2: sentence2,
        sentence3: sentence3,
        sentence1TranslateRu: sentence1TranslateRu,
        sentence2TranslateRu: sentence2TranslateRu,
        sentence3TranslateRu: sentence3TranslateRu,
        sentence1TranslateEn: sentence1TranslateEn,
        sentence2TranslateEn: sentence2TranslateEn,
        sentence3TranslateEn: sentence3TranslateEn,
        sentence1TranslateFr: sentence1TranslateFr,
        sentence2TranslateFr: sentence2TranslateFr,
        sentence3TranslateFr: sentence3TranslateFr,
        sentence1Sound: sentence1Sound,
        sentence2Sound: sentence2Sound,
        sentence3Sound: sentence3Sound
      };
      dbo
        .collection("roots")
        .updateOne({root_id:root_id},{ $addToSet: { translations:  newtranslation } }, function(err, result) {
          if (err) throw err;
          console.log("1 translation insered");
          res.send(result);
          db.close();
        });
    });
  }
);

app.post("/newfamily/:root_id/:familyId/:family/:familyPosition/:familyTranslateRu/:familyTranslateEn/:familyTranslateFr",
  (req, res) => {
    const root_id = req.params.root_id;
    const familyId = Number(req.params.familyId);
    const family = req.params.family;
    const familyPosition = req.params.familyPosition;
    const familyTranslateRu = req.params.familyTranslateRu;
    const familyTranslateEn = req.params.familyTranslateEn;
    const familyTranslateFr = req.params.familyTranslateFr;
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var newfamily = {
        familyId: familyId,
        family: family,
        familyPosition: familyPosition,
        familyTranslateRu: familyTranslateRu,
        familyTranslateEn: familyTranslateEn,
        familyTranslateFr: familyTranslateFr
      };
      dbo
        .collection("roots")
        .updateOne({root_id:root_id},{ $addToSet: { families:  newfamily } }, function(err, result) {
        if (err) throw err;
        console.log("1 family insered");
        res.send(result);
        db.close();
      });
    });
  }
);

app.post(
  "/newfamilyverb/:root_id/:familyverbId/:familyverb/:familyverbPosition/:familyverbTranslateRu/:familyverbTranslateEn/:familyverbTranslateFr",
  (req, res) => {
    const root_id = req.params.root_id;
    const familyverbId = Number(req.params.familyverbId);
    const familyverb = req.params.familyverb;
    const familyverbPosition = req.params.familyverbPosition;
    const familyverbTranslateRu = req.params.familyverbTranslateRu;
    const familyverbTranslateEn = req.params.familyverbTranslateEn;
    const familyverbTranslateFr = req.params.familyverbTranslateFr;

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var newfamilyverb = {
        familyverbId: familyverbId,
        familyverb: familyverb,
        familyverbPosition: familyverbPosition,
        familyverbTranslateRu: familyverbTranslateRu,
        familyverbTranslateEn: familyverbTranslateEn,
        familyverbTranslateFr: familyverbTranslateFr
      };
      dbo
        .collection("roots")
        .updateOne({root_id:root_id},{ $addToSet: { familiesverbs:  newfamilyverb } }, function(err, result) {
          if (err) throw err;
          console.log("1 familyverb insered");
          res.send(result);
          db.close();
        });
    });
  }
);

app.post(
  "/newsynonym/:root_id/:synonymId/:synonym/:synonymTranslateRu/:synonymTranslateEn/:synonymTranslateFr",
  (req, res) => {
    const root_id = req.params.root_id;
    const synonymId = Number(req.params.synonymId);
    const synonym = req.params.synonym;
    const synonymTranslateRu = req.params.synonymTranslateRu;
    const synonymTranslateEn = req.params.synonymTranslateEn;
    const synonymTranslateFr = req.params.synonymTranslateFr;

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var newsynonym = {
        synonymId: synonymId,
        synonym: synonym,
        synonymTranslateRu: synonymTranslateRu,
        synonymTranslateEn: synonymTranslateEn,
        synonymTranslateFr: synonymTranslateFr
      };
      dbo
      .collection("roots")
      .updateOne({root_id:root_id},{ $addToSet: { synonyms:  newsynonym } }, function(err, result) {
        if (err) throw err;
        console.log("1 synonym insered");
        res.send(result);
        db.close();
      });
    });
  }
);
app.post(
  "/newantonym/:root_id/:antonymId/:antonym/:antonymTranslateRu/:antonymTranslateEn/:antonymTranslateFr",
  (req, res) => {
    const root_id = req.params.root_id;
    const antonymId = Number(req.params.antonymId);
    const antonym = req.params.antonym;
    const antonymTranslateRu = req.params.antonymTranslateRu;
    const antonymTranslateEn = req.params.antonymTranslateEn;
    const antonymTranslateFr = req.params.antonymTranslateFr;

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var newantonym = {
        antonymId: antonymId,
        antonym: antonym,
        antonymTranslateRu: antonymTranslateRu,
        antonymTranslateEn: antonymTranslateEn,
        antonymTranslateFr: antonymTranslateFr
      };
      dbo
      .collection("roots")
      .updateOne({root_id:root_id},{ $addToSet: { antonyms:  newantonym } }, function(err, result) {
        if (err) throw err;
        console.log("1 antonym insered");
        res.send(result);
        db.close();
      });
    });
  }
);

app.post(
  "/newphrase/:root_id/:phraseId/:phrase/:phraseTranslateRu/:phraseTranslateEn/:phraseTranslateFr",
  (req, res) => {
    const root_id = req.params.root_id;
    const phraseId = Number(req.params.phraseId);
    const phrase = req.params.phrase;
    const phraseTranslateRu = req.params.phraseTranslateRu;
    const phraseTranslateEn = req.params.phraseTranslateEn;
    const phraseTranslateFr = req.params.phraseTranslateFr;

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var newphrase = {
        phraseId: phraseId,
        phrase: phrase,
        phraseTranslateRu: phraseTranslateRu,
        phraseTranslateEn: phraseTranslateEn,
        phraseTranslateFr: phraseTranslateFr
      };
      dbo
      .collection("roots")
      .updateOne({root_id:root_id},{ $addToSet: { phrases:  newphrase } }, function(err, result) {
        if (err) throw err;
        console.log("1 phrase insered");
        res.send(result);
        db.close();
      });
    });
  }
);
// app.post(
//   "/newsentence/:root_id/:sentence/:sentenceTranslate/:sentenceSound",
//   (req, res) => {
//     const root_id = req.params.root_id;
//     const sentence = req.params.sentence;
//     const sentenceTranslate = req.params.sentenceTranslate;
//     const sentenceSound = req.params.sentenceSound;
//     MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//       if (err) throw err;
//       var dbo = db.db("mordict");
//       var newsentence = {
//         root_id: root_id,
//         sentence: sentence,
//         sentenceTranslate: sentenceTranslate,
//         sentenceSound: sentenceSound
//       };
//       dbo
//         .collection("sentencies")
//         .insertOne(newsentence, function(err, result) {
//           if (err) throw err;
//           console.log("1 sentence insered");
//           res.send(result);
//           db.close();
//         });
//     });
//   }
// );

app.put("/newactive/:root_id/:active_id", (req, res) => {
  const root_id = req.params.root_id;
  const active_id = req.params.active_id;
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    var newactive = {
      $set:{
      active_id:active_id
      }
    };
    dbo
      .collection("roots")
      .updateOne({root_id:root_id},newactive, function(err, result) {
        if (err) throw err;
        console.log("1 active insered");
        res.send(result);
        db.close();
      });
  });
});

app.put("/newpassive/:root_id/:passive_id", (req, res) => {
  const root_id = req.params.root_id;
  const passive_id = req.params.passive_id;
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mordict");
    var newpassive = {
      $set:{
      passive_id:passive_id
      }
    };
    dbo
      .collection("roots")
      .updateOne({root_id:root_id},newpassive, function(err, result) {
        if (err) throw err;
        console.log("1 passive insered");
        res.send(result);
        db.close();
      });
  });
});

//delete
app.delete("/deleteroot/:root_id", (req, res) => {
  MongoClient.connect(
    url,
    {
      useNewUrlParser: true
    },
    function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var root_id = req.params.root_id;
      dbo
        .collection("roots")
        .deleteOne({ root_id: root_id }, function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
    }
  );
});

app.put("/deletetranslation/:root_id/:translationId", (req, res) => {
  const translationId = Number(req.params.translationId);
  const root_id = req.params.root_id;
  console.log(root_id);
  console.log(translationId);
  MongoClient.connect(
    url,
    {
      useNewUrlParser: true
    },
    function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      var ObjectID = require("mongodb").ObjectID;

      dbo
        .collection("roots")
        .updateOne({root_id: root_id},{$pull:{translations:{translationId:translationId}}}, function(err, result) { 
        if (err) throw err;
          res.send(result);
          db.close();
        });
    }
  );
});
app.put("/deletefamily/:root_id/:familyId", (req, res) => {
  const root_id = req.params.root_id;
  const familyId = Number(req.params.familyId);
  MongoClient.connect(
    url,
    {
      useNewUrlParser: true
    },
    function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      dbo
        .collection("roots")
        .updateOne({root_id: root_id},{$pull:{families:{familyId:familyId}}}, function(err, result) { 
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
    }
  );
});

app.put("/deletefamilyverb/:root_id/:familyverbId", (req, res) => {
  const root_id = req.params.root_id;
  const familyverbId = Number(req.params.familyverbId);
  MongoClient.connect(
    url,
    {
      useNewUrlParser: true
    },
    function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      dbo
        .collection("roots")
        .updateOne({root_id: root_id},{$pull:{familiesverbs:{familyverbId:familyverbId}}}, function(err, result) { 
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
    }
  );
});

app.put("/deletesynonym/:root_id/:synonymId", (req, res) => {
  const root_id = req.params.root_id;
  const synonymId = Number(req.params.synonymId);
  MongoClient.connect(
    url,
    {
      useNewUrlParser: true
    },
    function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      dbo
        .collection("roots")
        .updateOne({root_id: root_id},{$pull:{synonyms:{synonymId:synonymId}}}, function(err, result) { 
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
    }
  );
});
app.put("/deleteantonym/:root_id/:antonymId", (req, res) => {
  const root_id = req.params.root_id;
  const antonymId = Number(req.params.antonymId);
  MongoClient.connect(
    url,
    {
      useNewUrlParser: true
    },
    function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      dbo
        .collection("roots")
        .updateOne({root_id: root_id},{$pull:{antonyms:{antonymId:antonymId}}}, function(err, result) { 
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
    }
  );
});
app.put("/deletephrase/:root_id/:phraseId", (req, res) => {
  const root_id = req.params.root_id;
  const phraseId = Number(req.params.phraseId);
  MongoClient.connect(
    url,
    {
      useNewUrlParser: true
    },
    function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      dbo
        .collection("roots")
        .updateOne({root_id: root_id},{$pull:{phrases:{phraseId:phraseId}}}, function(err, result) { 
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
    }
  );
});
app.put("/deleteactive/:root_id", (req, res) => {
  const root_id = req.params.root_id;
  MongoClient.connect(
    url,
    {
      useNewUrlParser: true
    },
    function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      
      var newactive = {
        $set:{
        active_id:"_"
        }
      };
      dbo
        .collection("roots")
        .updateOne({root_id:root_id},newactive, function(err, result) {
          if (err) throw err;
          console.log("1 active deleted");
          res.send(result);
          db.close();
        });
    }
  );
});

app.put("/deletepassive/:root_id", (req, res) => {
  const root_id = req.params.root_id;
  MongoClient.connect(
    url,
    {
      useNewUrlParser: true
    },
    function(err, db) {
      if (err) throw err;
      var dbo = db.db("mordict");
      
      var newpassive = {
        $set:{
        passive_id:"_"
        }
      };
      dbo
        .collection("roots")
        .updateOne({root_id:root_id},newpassive, function(err, result) {
          if (err) throw err;
          console.log("1 passive deleted");
          res.send(result);
          db.close();
        });
    }
  );
});

app.get("/createdump", (req, res) => {
  var backup = require("mongodb-backup");
  backup({
    uri: url, // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase>
    root: "D:/copyDataBase"
  });
  console.log("dump created");
  res.send(true);
});
let port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Server listen on port", port);
});
