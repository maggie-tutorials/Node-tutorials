var http = require('http');
http.createServer(function(request, response) { // request event
    response.writeHead(200);
    response.write("Dog is running");
    setTimeout(function(){ // timeout event
        response.write("Dog is done.");
        response.end();
    } 5000);
}).listen(8080);