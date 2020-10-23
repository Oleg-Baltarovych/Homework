const http = require("http");
const os = require("os");
const path = require("path");

http.createServer( function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("<h1>System information</h1>")
	response.write(`<p>Current user name: ${os.userInfo().username}</p>`)
	response.write(`<p>OS type: ${os.platform()}</p>`)
	response.write(`<p>System work time: ${os.uptime() / 60} minutes</p>`)
	response.write(`<p>Current work directory: ${path.dirname(`F:/Web-developer/Study/SoftServe/Homework/HW №11/script11.1`)}</p>`)
	response.write(`<p>Server file name: ${path.basename(`F:/Web-developer/Study/SoftServe/Homework/HW №11/script11.1`)}</p>`)
	response.end();
}).listen(5000);

