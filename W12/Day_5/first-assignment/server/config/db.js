const { default: mongoose } = require("mongoose");
const { logger } = require("./winston");
require('dotenv').config();

// MongoDB Setup
module.exports = mongoose.connect(process.env.NODE_MONGODB_URI, { dbName: "phonebook" })
                            .then(
                                (value) => logger.log("info", "Connected to database.."),
                                (reason) => logger.log("info", "Rejected for:", reason)
                            )
                            .catch((err) => logger.log("info", "Error connecting to database:", err));
