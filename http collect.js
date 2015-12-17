var http = require("http");
var output = "";
http.get(process.argv[2], function(response){
    response.setEncoding("utf8");
    response.on("data", function(data){
        output += data;
    });
    response.on("error", console.error);
    response.on("end", function(){
        console.log(output.length);
        console.log(output);
    });
});
