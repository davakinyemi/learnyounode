var fs = require("fs");
fs.readFile(process.argv[2], "utf-8", function doneReading(err, fileContents) {
    if(err){
        console.log("cannot read file");
    } else {
        var lines = fileContents.split("\n").length - 1;
        console.log(lines);
    }
  });