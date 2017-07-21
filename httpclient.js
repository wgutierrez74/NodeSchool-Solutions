var http = require("http");

http.get(process.argv[2], function(response){
    
    response = response.setEncoding("utf8");
    //console.log(response);
    response.on("data", function(data){
       console.log(data); 
    });


});