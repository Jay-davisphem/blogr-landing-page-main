const http = require('http')
const fs = require('fs').promises

let indexFile;

const requestListener = function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(indexFile);
};

const server = http.createServer(requestListener)

fs.readFile(__dirname + "/index.html")
  .then(contents => {
    indexFile = contents
    server.listen(3000, console.log("Server running..."));
  })
  .catch(err => {
    res.writeHead(500);
    console.log(err)
    res.end(err);
     return;
    });
