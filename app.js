//http module
// const fs = require("fs");
const { readFile, writeFile } = require("fs");

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const read = readFile("./index.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error reading filee");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(read);
      res.end();
    });
  } else if (req.url === "/about") {
    res.write("welcome to about page");
    res.end();
  } else {
    //req.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>there is no such page</h1><a href="/">click here</a>`);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});
