import express from "express";
import passport from "passport";
import session from "./config.js";
import { connect } from "mongoose";
import { UserModel } from "./user.js";

import { local, loggerError, loggerInfo } from "./config.js";
import { handleError } from "./error.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup: Mongo, express-session and passport (local)
await connect("mongodb://localhost:27017/auth")
  .then(() => loggerInfo("Connected to mongo."))
  .catch((err) => loggerError("Error connecting to mongo:", err));

app.use(session);
app.use(passport.initialize());
app.use(passport.session());

passport.use(local);
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  UserModel.findOne({ _id: id })
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

// Endpoints.
app.get("/api", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (error) {
    handleError(error, res);
  }
});

app.post("/api/auth/signup", async (req, res) => {
  const user = new UserModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    handleError(error, res);
  }
});

app.post(
  "/api/auth/login",
  passport.authenticate("local", {
    failureMessage: true,
    successMessage: true,
  }),
  (req, res) => {
    req.login(req.user, (err) => {
      if (err) return handleError(err);
      return res
        .status(200)
        .json(req.session);
    });
  }
);

app.post("/api/auth/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return handleError(err, res);
    return res.redirect("/");
  });
});

app.listen(3030, () => loggerInfo("Server running on 3000.."));
