var path = process.argv[2];
var extension = process.argv[3];

var mymodule = require("./mymodule.js")

var callback = function(err, files){
    
    if(err){
        console.log("error");
        return;
    }
    for(var file in files){
        console.log(files[file]);
    }   
    
};
   
mymodule(path, extension, callback);   

