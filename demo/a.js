var h = require('http');
h.createServer(function(req, resp){
			resp.end('hello world');
}).listen(2222);
