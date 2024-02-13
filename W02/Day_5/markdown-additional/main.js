const http = require("http");
const url = require("url");
const { generateRandomNumber } = require("./methods/generator");
require("dotenv").config({ path: "./config/.env" });

const host = process.env.HOST;
const port = process.env.PORT;


const server = http.createServer((req, res) => {
  if (req.url == "/challenge") {
    let body = "";
    req.on("data", (inp) => {
      body += inp;
    });
    req.on("end", () => {
      const myInput = body.number;
      console.log(myInput);
      if (myInput === 6) {
        res.writeHead(301, { Location: "/Success" });
        console.log(req.url);
        return res.end();
      } else res.end("try more");
    });
  }
  if (req.url == "/Success") {
    console.log("hanta hna");
    console.log(req.url);
  }
});

// Creating the server
// const server = http.createServer((req, res) => {
//   const { pathname } = url.parse(req.url, true);

//   if (pathname === "/challenge") {
//     let body = '';
//     req.on('data', inp => {
//       body += inp;
//     })
//     req.on('end', () => {
//       const myInput = parseInt(body);
//       console.log(myInput);
//       if(myInput === generateRandomNumber()) {
//         res.writeHead(301, { 'location' : '/SUCCESS'}); // REDIRECTION 
//                     /*
//                       To effect a redirect, you send a redirect status 
//                       (301 for permanent redirect,
//                       302 for a "this currently lives on ..." redirect,
//                       and 307 for an intentional temporary redirect):

//                       response.writeHead(301, {
//                         Location: `http://whateverhostthiswillbe:8675/${newRoom}`
//                       }).end();
//                       t9dr tdih finma biti.
//                     */
//         console.log(req.url);
//         return res.end();
//       } else {
//         res.end('Try Again.')
//       }
//     })
//   }

//   if(req.url == '/SUCESS') {
//     console.log("Mbrouk 3lik l'iPhone 15 Pro.")
//   }
// });

//     res.writeHead(200, { "Content-Type": "text/plain" });
//   } else if (pathname == "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Nothing here... :/");
//   } else {
//    res.writeHead(404, { "Content-Type": "text/plain" });
//    res.end("You lost? :/");
//   }
// });

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
