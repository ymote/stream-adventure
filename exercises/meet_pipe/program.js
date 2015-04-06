var fs = require('fs');
var file = process.argv[2];

// enter your code below
fs.createReadStream(file).pipe(process.stdout);