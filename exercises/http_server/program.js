  var http = require('http');
  var through = require('through2');
  
  var server = http.createServer(function (req, res) {
      if (req.method === 'POST') {
          req.pipe(through(function (buf, _, next) {
	      // enter your code here
              
              next();
          })).pipe(res);
      }
      else res.end('send me a POST\n');
  });
  server.listen(8000);

