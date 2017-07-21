var fs = require("fs");
var path =require("path");

module.exports = function(path, extension, callback){
    fs.readdir(path, function(err, files){
        if(err){console.log(err); return callback(err);}
        
        for(var i=files.length-1; i>= 0; i--){
            if(files[i].split(".")[1] != extension){
                files.splice(i,1);
            }
        }
        
        return callback(null, files);
    });
};