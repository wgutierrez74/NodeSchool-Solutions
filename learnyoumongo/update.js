var mongo = require('mongodb').MongoClient
    mongo.connect("mongodb://localhost:27017/"+process.argv[2], function(err, db) {
      // db gives access to the database
     var collection =  db.collection("users");
     
     collection.update({username: "tinatime"}, {$set: {age:40}}, function(err, user){
         //console.log(user);
         db.close();
     });
      
    });