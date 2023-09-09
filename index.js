const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request headers:", req.headers);

  res.setHeader("Content-Type", "text/plain");

  res.end("Hello, world!");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});
