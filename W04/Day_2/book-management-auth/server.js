const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./routes/books");
const usersRouter = require("./routes/users");
require("dotenv").config();

const port = process.env.PORT;

const server = express();
server.use(cookieParser());
server.use(express.urlencoded({ extended: true  }));
server.use(express.json());
server.set('view engine', 'ejs');
server.use((req, res, next) => { // To avoid tabbing back into the login page while already authenticated.
  res.set('Cache-Control', 'no-store');
  next();
});

server.use('/', usersRouter); 
server.use('/', router); 


server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
  });