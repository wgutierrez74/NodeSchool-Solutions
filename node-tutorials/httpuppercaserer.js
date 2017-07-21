var http = require("http");
var port = process.argv[2];


var server = http.createServer(function(req, res){
    
    //console.log(req);
     if(req.method == "POST"){
        req.on("data" , function(data){
           res.write(data.toString().toUpperCase());
        });
        req.on("end", function(){
            res.end();
        });
        
     }
});

server.listen(port);

