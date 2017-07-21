var express = require("express");
var express = require("express");
var app = express();
var path = require("path");


//var bodyparser = require('body-parser');

app.use(require('stylus').middleware(process.argv[3]));

app.use(express.static(process.argv[3]));


app.listen(process.argv[2]);