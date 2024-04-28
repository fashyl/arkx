import bcrypt from "bcrypt";
import session from "express-session";
import MongoStore from "connect-mongo";
import winston from "winston";

import { Strategy } from "passport-local";
import { UserModel } from "./user.js";

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
  }
}

export const local = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) return done(null, false, { message: "Incorrect Email." });

      const match = await bcrypt.compare(password, user.password);
      if (!match) return done(null, false, { message: "Incorrect Password." });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
);

// Session setup
export const userSession = session({
  secret: "IDFNS394290I24NOJNDSQ",
  resave: false,
  saveUninitialized: false,
  cookie: {   
    httpOnly: true, 
    maxAge: 1 * 24 * 60 * 60, // a day
},
  store: new MongoStore({
    mongoUrl: "mongodb://localhost:27017/auth",
    collectionName: "sessions",
    ttl: 14 * 24 * 60 * 60, // = 14 days. Default
    crypto: {
      secret: "kdsfàéçjJNFDSJFNDSN3",
    },
  }),
});


export const logger = winston.createLogger({
  level: 'info', // Set the default logging level (can be adjusted based on needs)
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.printf((info) => `[${info.level}] ${info.message}`),
  ),
  transports: [
    new winston.transports.Console(), // Log to console for development
    // new winston.transports.File({ filename: './app.log' }),
    // Add other transports for production environments, e.g., file, database
  ],
});
  

const colors = {
  200: '32',
  201: '32',
  204: '32',
  300: '36',
  302: '36',
  400: '35',
  404: '35',
  401: '33',
  403: '33',
  500: '31',
};

export default function requestLogger(req, res, next) {
      const startTime = performance.now(); // Use performance.now() for request duration
      logger.info(`HTTP${req.httpVersion} ${req.method} ${req.url}`);
      res.on('finish', () => {
        const statusCodeColor = colors[res.statusCode] || 'white';
        const durationInMs = performance.now() - startTime;
        logger.info(
          `> \x1b[${statusCodeColor}m${res.statusCode}\x1b[0m ${res.statusMessage} in ${durationInMs.toFixed(2)}ms\n`
        );
      });
      next();
    }
