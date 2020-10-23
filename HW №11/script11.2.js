const http = require("http");
const os = require("os");
const pm = require("./personalmodule.js");

http.createServer( function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	response.write(`Date of request: ${pm.userDate(os.userInfo().username)}`);
	response.end();
}).listen(5000);
