const session = require("express-session");
const MongoStore = require("connect-mongo");
const connection = require("./db");
require("dotenv").config();

exports.sesh = session({
  secret: process.env.HIDDEN_KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongoUrl: process.env.MONGO_URI,
    mongooseConnection: connection,
    collectionName: "sessions",
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
});
