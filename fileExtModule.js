var fs = require("fs");
var path = require("path");
var array = [];
module.exports = function(dir, ext, callback){
    fs.readdir(dir, function(err, list){
   if(err){
       return callback(err);
   } else {
       for(var i = 0; i < list.length; i++){
           if(path.extname(list[i]).substring(1) == ext){
               array.push(list[i]);
           }
       }
   }
   return callback(null, array);
});
};