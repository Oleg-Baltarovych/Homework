const http = require('http');
let url = require('url');
let static = require('node-static');
let file = new static.Server('.');

	function accept(req, res) {
		if (req.url == '/files_on_server.json') {
			file.serve(req, res);
		} else {
			file.serve(req, res);
		}
	}
	
http.createServer(accept).listen(5000);
console.log("Server running on port 5000");
