var fs = require('fs');
var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    // enter your code below

    lineCount ++;
    next();
});

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);

