const http = require("http");
const url = require("url");

const port = 8080;
const ip = "127.0.0.1";

const router = {
  // path:
};

const server = http.createServer(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World\n");
});

console.log("Listening on http://" + ip + ":" + port);

server.listen(port, ip);
