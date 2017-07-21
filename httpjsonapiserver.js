var http = require("http");
//var url = require("url");


var server = http.createServer(function(req, res){
    //console.log(req.url);
    res.writeHead(200, {"content-type":"application/json"});
    if(req.url.match("parsetime")){
        var date = new Date(req.url.split("=")[1]);
        var js = {
            "hour":date.getHours(),
            "minute":date.getMinutes(),
            "second":date.getSeconds()
        };
        res.write(JSON.stringify(js));
    }
    if(req.url.match("unixtime")){
        console.log("unix");
         var date = new Date(req.url.split("=")[1]);
         var js = {
             "unixtime":date.getTime()
         }
         res.write(JSON.stringify(js));
    }
    res.end();
});

server.listen(process.argv[2]);