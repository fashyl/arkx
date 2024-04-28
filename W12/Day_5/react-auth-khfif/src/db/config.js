import bcrypt from "bcrypt";
import session from "express-session";
import MongoStore from "connect-mongo";

import { Strategy } from "passport-local";
import { createLogger } from "vite";

import { UserModel } from "./user.js";

export const logger = createLogger();
export const loggerWarn = logger.warn;
export const loggerInfo = logger.info;
export const loggerError = logger.error;

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
export default session({
  secret: "IDFNS394290I24NOJNDSQ",
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongoUrl: "mongodb://localhost:27017/auth",
    collectionName: "sessions",
    ttl: 14 * 24 * 60 * 60, // = 14 days. Default
    crypto: {
      secret: "kdsfàéçjJNFDSJFNDSN3",
    },
  }),
});
