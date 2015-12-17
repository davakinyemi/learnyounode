var http = require("http");
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var array = [];
var endCount = 0;
for(var i = 0; i < 3; i++){
    getData(i, urls[i]);
}

function getData(index, url){
    http.get(url, function(res){
            res.setEncoding('utf8');                            

            var string = '';
            res.on('data', function(chunk){         

                string += chunk;

            });

            res.on('end', function(){
                array[index] = string;
                endCount++;
                if(endCount >= 3){
                    for(var i in array){
                        console.log(array[i]); 
                    }

                }
            });


        }).on('error', function(e) {
          console.log("Got error: " + e.message);
        }); 
}


