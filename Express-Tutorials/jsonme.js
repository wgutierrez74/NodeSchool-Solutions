var fs = require("fs");
var express = require("express");
var app = express();



app.get('/books', function(req, res){
   fs.readFile(process.argv[3], function(err, file){
       if(err){
           res.end("Bad file");
       }
       res.send(JSON.parse(file));
   });
});


app.listen(process.argv[2]);