const express = require("express");
const server = express();

server.get("/get", (req, res) => {
  console.log("GET Request :p");
}); // GET method

server.post("/post", (req, res) => {
  console.log("POST Request :p");
}); // POST method

server.delete("/delete", (req, res) => {
  console.log("DELETE Request :p");
}); // DELETE method

server.put("/put", (req, res) => {
  console.log("PUT Request :p");
}); // PUT method

server.use("/use", (req, res) => {
  console.log("ANY REQUEST :p");
}); // ANY method

server.all("/all", (req, res) => {
  console.log("GET, PUT, POST, DELETE :p");
}); // ALL method

// server.use((req, res) => {
//     console.log(':p'); // executed first
// }); // listens for any request

server.get("/regex", (req, res) => {
  console.log(Date.now());
}); // Regex compatible

server.get("/home", (req, res) => {
  res.status(200); // ..
  res.send("Hello World!");
}); // Hello World!

server.get("/query", (req, res) => {
  console.log(req.query.name);
}); // returns name /query?name=shyl&active=true

server.get("/profile/:id", (req, res) => {
  // `:`
  const { id } = req.params;
  res.status(200).json(database.find((profile) => profile.id == id));
}); // one endpoint, billions of profiles

const database = [
  {
    name: "shyl",
    username: "fashyl",
    id: 1,
  },
  {
    name: "dont",
    username: "dson",
    id: 2,
  },
  {
    name: "dpnt",
    username: "depliant",
    id: 3,
  },
];

// Intro to Middlewares
function verifyAge(req, res, next) {
    const { age } = req.params;
    if ( age >= 18 ) next();

    return res.status(404).send("Return when you're old enough.");
}

server.get('/age/:age', verifyAge, (req, res) => {
    res.status(200).send('Welcome.');
})

server.listen(3000, () => {
  console.log("Listening on port 3000...");
});
