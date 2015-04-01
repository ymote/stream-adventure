
  var through = require('through2');
  var tr = through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
  });

  // enter your code below

