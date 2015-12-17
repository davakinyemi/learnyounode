var fs = require("fs");
var path = require("path");
var pathname = process.argv[3];
fs.readdir(process.argv[2], function(err, list){
   if(err){
       console.log("could not read directory");
   } else {
       for(var i = 0; i < list.length; i++){
           if(path.extname(list[i]).substring(1) == pathname){
               console.log(list[i]);
           }
       }
   }
});

// Official solution:
/*var fs = require('fs');
     var path = require('path');
     fs.readdir(process.argv[2], function (err, list) {  
         if(err){
             console.log("error");
         } else {
       list.forEach(function (file) {  
         if (path.extname(file) === '.' + process.argv[3])  
           console.log(file);  
       }); 
         } 
     }); */