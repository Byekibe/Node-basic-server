const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h2>My first node server!!</h2>");
});

server.listen(5000, () => {
  console.log("Starting server at port 5000!!!");
});



