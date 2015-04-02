
  var through = require('through2');
  var tr = through(function (buf, _, next) {
      // enter your code below
      
      next();
  });

  process.stdin.pipe(tr).pipe(process.stdout);

