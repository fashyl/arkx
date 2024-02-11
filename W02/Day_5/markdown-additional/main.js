const http = require("http");
const url = require("url");
require("dotenv").config({ path: "./config/.env" });

const host = process.env.HOST;
const port = process.env.PORT;

// Creating the server
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  // Routing: define request handlers to process different endpoints.
  if (pathname === "/challenge") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(() => {
      
    });
  } else if (pathname == "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Nothing here... :/");
  } else {
   res.writeHead(404, { "Content-Type": "text/plain" });
   res.end("You lost? :/");
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
