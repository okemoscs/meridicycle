var csvjson = require('csvjson');
var fs = require('fs');
var data = fs.readFileSync('RDB.csv', { encoding : 'utf8'});

console.log(JSON.stringify(csvjson.toObject(data)));
