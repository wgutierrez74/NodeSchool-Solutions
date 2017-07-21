
var http = require("http");
var bl = require("bl");

function myLoop(i){
    
    http.get(process.argv[i], function(response){
        response.setEncoding("utf8");
        response.pipe(bl(function(err, data){
            if(err){console.log(err); return;}
            //console.log(data);
           // console.log(data.toString().length);
            console.log(data.toString());
            i++;
            if(i<5){
               
                myLoop(i);
            }
            
            
        }));
    });
}

myLoop(2);