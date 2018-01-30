xlsxj = require("xlsx-to-json");
 xlsxj({
   input: "RDB.xlsx",
   output: "rdb.json"
 }, function(err, result) {
   if(err) {
     console.error(err);
   }else {
     console.log(result);
   }
 });
