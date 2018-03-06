xlsxj = require("xlsx-to-json");

 xlsxj({
   input: "RDB.xlsx",
   output: "db.json"
 }, function(err, result) {
   if(err) {
     console.error(err);
   }else {
     console.log(result);
   }
 });

for (var i = 0; i < result.lenth(); i++)
{
    
}
