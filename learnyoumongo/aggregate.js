var mongo = require('mongodb').MongoClient
    mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
      // db gives access to the database
     var collection =  db.collection("prices");
     
     collection.aggregate([
      { $match: { size: process.argv[2] }},
      { $group: {
        _id: "average"// This can be an arbitrary string in this case
      , average: {
          // $sum is the operator used here
          $avg: '$price'
        }
      }}
    ]).toArray(function(err, avg){
        console.log(avg[0].average.toFixed(2));
        db.close();
    }); 
    

      
    });