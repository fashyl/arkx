const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require('../src/models/user_model');
const LocalStrategy = require("passport-local").Strategy;

const local = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username });
    if (!user) return done(null, false);

    const match = await bcrypt.compare( password, user.password);
    if (!match) return done(null, false);

    return done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(local);
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
        User.findOne({ _id: id })
        .then(user => done(null, user))
        .catch(err => done(err));
})