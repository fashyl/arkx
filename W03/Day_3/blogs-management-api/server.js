const express = require("express");
const users_router = require('./routes/usersRoutes')
const blogs_router = require('./routes/blogsRoutes')
require("dotenv").config();

const port = process.env.PORT;
const host = process.env.HOST;


const server = express();
server.use(express.urlencoded({ extended: true  }))
server.use(express.json())

server.use('/', blogs_router);
server.use('/', users_router);

server.listen(port,host, () => {
  console.log(`Listening on http://${host}:${port}`);
});