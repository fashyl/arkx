const userRouter = require("express").Router();
const User = require("../models/user");
const { errorHandler } = require("../helpers/handlers");
const passport = require("passport");

userRouter.post("/signup", async (req, res, next) => {
  try {
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });
    const user = await newUser.save();
    res.status(201).json({ message: "User signed up!", data: user });
  } catch (error) {
    errorHandler(error, res);
  }
});

userRouter.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: "Forbidden",
    failureFlash: true,
  }),
  (req, res) => {
    req.login(req.user, (err) => {
      if (err) return handleError(err);
      return res
        .status(200)
        .json({ type: "Authenticated", message: "Login successful!" });
    });
  }
);

userRouter.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) return handleError(err);
      return res.redirect('/');
    });
  });

module.exports = userRouter;
