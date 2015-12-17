var http = require("http");
var fs = require("fs");
var chars = "";
var server = http.createServer(function(req, res){
    req.setEncoding("utf8");
    req.on("data", function(data){
        chars += data.toUpperCase();
    });
    req.on("end", function(){
        res.write(chars);
        res.end();
    });
});

server.listen(process.argv[2]);
