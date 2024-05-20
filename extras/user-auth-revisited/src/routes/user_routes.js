const express = require("express");
const { register } = require("../controllers/user_controllers");
const { isAuth } = require("../middleware/auth");
const passport = require("passport");
const { logger } = require("../../config/winston");
const router = express.Router();

router.get("/login", (req, res, next) => {
  const form =
    '<h1>Login</h1><form method="POST" action="/login">\
                    Enter Username:<br><input type="text" name="username">\
                    <br>Enter Password:<br><input type="password" name="password">\
                    <br><br><input type="submit" value="Submit"></form>';
  res.send(form);
});

router.get("/register", (req, res, next) => {
  const form =
    '<h1>Register</h1><form method="post" action="register">\
                    Enter Username:<br><input type="text" name="username">\
                    <br>Enter Password:<br><input type="password" name="password">\
                    <br>Enter Email:<br><input type="email" name="email">\
                    <br><br><input type="submit" value="Submit"></form>';
  res.send(form);
});

router.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

router.get("/", (req, res, next) => {
  res.send('<h1>Home</h1><p>Please <a href="/register">register</a></p>');
});

router.get("/me", isAuth, (req, res, next) => {
  if(req.session.views) req.session.views++;
  else req.session.views = 1;
  res.send(
    '<p>You successfully logged in.</p>'
  );
});

router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login",
    successRedirect: "/me",
    failureFlash: true,
  })
);
router.post("/register", register);

module.exports = router;