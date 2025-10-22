// node/app.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js 🟢");
});

server.listen(3000, () => {
  console.log("Node server running at http://localhost:3000");
});
