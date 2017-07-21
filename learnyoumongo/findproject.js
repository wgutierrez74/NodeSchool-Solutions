var mongo = require('mongodb').MongoClient
    mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
      // db gives access to the database
      db.collection("parrots").find({
          age: { $gt:Number(process.argv[2])}
      }, {
          name:1,
          age:1,
          _id:0
      }).toArray(function(err, parrots){
            console.log(parrots);
             
      });
      db.close();
    });