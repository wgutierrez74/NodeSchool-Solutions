var mongo = require('mongodb').MongoClient
    mongo.connect("mongodb://localhost:27017/"+process.argv[2], function(err, db) {
      // db gives access to the database
     var collection =  db.collection(process.argv[3]);
     
     collection.remove({_id: process.argv[4]}, function(err, user){
         //console.log(user);
         db.close();
     });
      
    });