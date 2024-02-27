const express = require("express");
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const server = express();

const port = 4040;
server.use(express.json());
server.set('view engine', 'ejs');
server.use(express.urlencoded({ extended: true  }));

// Configure session
//
server.use(
  session({
    secret: process.env.SESSION_KEY, // Secret key used to sign the session ID cookie
    resave: false, // Whether to save the session for every request, even if it hasn't changed
    saveUninitialized: false // Whether to save uninitialized sessions (new but not modified)
  })
);
server.use(passport.initialize()) // Intializes Passport for incoming requests, allowing authentication strategies to be applied.
server.use(passport.session()) // Middleware that will restore login state from a session.

// Configure Strategy
//
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4040/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // You can authenticate the user here based on their Google profile
    // For example, create a user account if it doesn't exist already
    // and store the user information in your database
    // For now, we'll just..
    return done(null, profile);
  }
));

// Authentication requests
//
// Route to start the OAuth flow
server.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback route after Google has authenticated the user
server.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser((user, cb) => {
    cb(null, user);
  });
  
passport.deserializeUser((user, cb) => {
    cb(null, user) // db.users.findById(id, (err, user) => {
         //   if (err) { return cb(err); }
            //   cb(null, user);
            // });
  });

// Checking Authentication
//
function checkAuthentication(req,res,next){
  if(req.isAuthenticated()){
      //req.isAuthenticated() will return true if user is logged in
      next();
  } else{
      res.redirect("/login");
  }
} // Added to routes needing authentication before access.

// Routes
//
server.get('/login', (req, res, next) => {
    res.render('login');
})
server.get('/register', (req, res, next) => {
    res.render('register');
})
server.get('/', checkAuthentication, (req, res, next) => {
    console.log(req.user); // ? need to read more on the user object 
    res.render('home');
})

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
  });