var mongo = require('mongodb').MongoClient
    mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
      // db gives access to the database
     var collection =  db.collection("parrots");
     
     collection.count({age: {$gt:Number(process.argv[2])}}, function(err, parrot){
         console.log(parrot);
         db.close();
     });
      
    });