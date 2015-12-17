var http = require("http");
var url = require("url");
var timeObj;
var server = http.createServer(function(req, res){
    var parsedUrl = url.parse(req.url, true);
    var time = new Date(parsedUrl.query.iso);
    if(parsedUrl.pathname == "/api/parsetime"){
        timeObj = getNormTime(time);
    }
    if(parsedUrl.pathname == "/api/unixtime"){
        timeObj = getUnixTime(time);
    }
    if(timeObj){
        res.writeHead(200, {"content-Type": "application/json"});
        res.end(JSON.stringify(timeObj));
    }else{
        res.writeHead(404);
        res.end();
    }
});
server.listen(process.argv[2]);

function getNormTime(time){
    return {
        "hour": time.getHours(),
        "minute": time.getMinutes(),
        "second": time.getSeconds()
    };
}

function getUnixTime(time){
    return {
        "unixtime": time.getTime()
    };
}