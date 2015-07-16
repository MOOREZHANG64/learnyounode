var fs = require('fs');
var filename = process.argv[2];
var buf = fs.readFileSync(filename);
var str = buf.toString();
var arrstr = str.split('\n');
console.log(arrstr.length - 1);