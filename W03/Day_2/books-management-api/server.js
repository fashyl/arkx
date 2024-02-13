const express = require("express");
const books = require('./routes/books')
const authors = require('./routes/authors')
require("dotenv").config({ path :'./config/.env'});

const port = process.env.PORT;
const host = process.env.HOST;

const server = express();
server.use(express.urlencoded({ extended: true  }))
server.use(express.json())
server.use('/api/books', books);
server.use('/api/authors', authors);


server.listen(port, host, () => {
    console.log(`Listening on http://${host}:${port}/`);
  });