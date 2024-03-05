const express = require('express');
const { config } = require('./config/config.js');
const { run } = require('./config/database.js');
const productsRouter = require('./routes/products.js');
const usersRouter = require('./routes/users.js');
const cookieParser = require('cookie-parser');

const server = express();
server.use(express.json());
server.use(cookieParser()); // PIYVFGDPSQIHFSJKQNF
server.use(express.urlencoded({ extended : true }));
run(); // MongoDB

// Routers
server.use('/api/auth', usersRouter);
server.use('/api/profile', usersRouter);
server.use('/api/products', productsRouter);

server.listen( config.port , () => {
    console.log('W05 | ECOM Platfrom Server')
    console.log(`Listening on http://localhost:${config.port} ..`);
})