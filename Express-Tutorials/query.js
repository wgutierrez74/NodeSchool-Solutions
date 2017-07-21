var express = require("express");
var app = express();
var path = require("path");



app.get('/search', function(req, res){
    //console.log(req.query);
    res.json(req.query);
});


app.listen(process.argv[2]);