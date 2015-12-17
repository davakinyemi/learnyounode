var net = require("net");
var server = net.createServer(function(socket){
    socket.end(currentDate());
});
server.listen(process.argv[2]);



function currentDate(){
    var d = new Date();
    var year = d.getFullYear();
    var month = reformat(d.getMonth() + 1);
    var day = reformat(d.getDate());
    var hour = reformat(d.getHours());
    var min = reformat(d.getMinutes());
    
    return year + "-" + month + "-" + day + " " + hour + ":" + min + "\n";
}

function reformat(digit){
    if(digit.toString().length == 1){
        return 0 + "" + digit;
    }
    return digit;
}