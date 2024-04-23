const MongoStore = require("connect-mongo");
const session = require("express-session");
require('dotenv').config();

// Session setup
module.exports = session({
    secret: process.env.NODE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongoUrl: process.env.NODE_MONGODB_URI,
        dbName: 'test-sessions',
        collectionName: 'sessions',
        ttl: 14 * 24 * 60 * 60, // = 14 days. Default
        crypto: {
            secret: process.env.NODE_SECRET,
        }
    })
})
