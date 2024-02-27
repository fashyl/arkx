const express = require("express");
const session = require('express-session');
const passport = require('passport');
const uuid = require('uuid4');
const LocalStrategy = require('passport-local').Strategy;
const server = express();

const port = 3030;
server.use(express.json());
server.set('view engine', 'ejs');
server.use(express.urlencoded({ extended: true  }));

// Configure session
//
server.use(
  session({
    secret: 'mySecretKey', // Secret key used to sign the session ID cookie
    resave: false, // Whether to save the session for every request, even if it hasn't changed
    saveUninitialized: false // Whether to save uninitialized sessions (new but not modified)
  })
);
server.use(passport.initialize()) // Intializes Passport for incoming requests, allowing authentication strategies to be applied.
server.use(passport.session()) // Middleware that will restore login state from a session.

// Configure Strategy
//
passport.use(new LocalStrategy(
    function(username, password, done) {
        if(username === 'admin' && password === 'admin') {
            return done(null, { username, id: uuid()}); // If no error
        } else {
            return done(null, false, { message : "Invalid credentials."}); // If no error
        }
    }
  ));

// Authentication requests
//
server.post( 
  "/login",  // server.post('/login',           
  passport.authenticate("local", { // passport.authenticate('local', { failureRedirect: '/login' }),
    failureRedirect: "/login",  // function(req, res) {
    successRedirect: "/",  // res.redirect('/');
  })  
);

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

// Routes
//
server.get('/login', (req, res, next) => {
    res.render('login');
})
server.get('/register', (req, res, next) => {
    res.render('register');
})
server.get('/', checkAuthentication ,(req, res, next) => {
    console.log(req.session);
    res.render('home');
})

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

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
  });