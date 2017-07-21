var net = require("net");
var strftime = require('strftime');

var server = net.createServer(function(socket){
   
    //var date = new Date();
    
    socket.write(strftime("%Y-%m-%d %H:%M\n"));
    socket.end();
});

server.listen(process.argv[2]);
