const mongoose = require("mongoose");
const { logger } = require("./winston");
require("dotenv").config();

const connection = mongoose.createConnection(process.env.MONGO_URI, {});
connection.on('connected', () => logger.log("info","Connected to Mongo!"));
connection.on('error', (err) => logger.log("error","Error connecting to Mongo :/"));

module.exports = connection;