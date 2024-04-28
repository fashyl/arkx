import express from "express";
import passport from "passport";
import cors from "cors";
import { connect } from "mongoose";
import { UserModel } from "./user.js";

import requestLogger, { local, userSession , logger } from "./config.js";
import { handleError } from "./error.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Setup: Mongo, express-session and passport (local)
await connect("mongodb://localhost:27017/auth")
  .then(() => logger.log("info", "Connected to mongo."))
  .catch((error) => logger.log("error", "Error connecting to mongo", error));

app.use(userSession);
app.use(passport.initialize());
app.use(passport.session());
app.use(requestLogger);

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
        .json({message: "Succesful login, ", session: req.session});
    });
  }
);

app.post("/api/auth/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return handleError(err, res);
    return res.status(200).json({message: 'Succesful logout', session: req.session});
  });
});

app.listen(3030, () => logger.log("info", "Server running on 3000.."));
