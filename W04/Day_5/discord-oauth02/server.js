const express = require("express");
const passport = require("passport");
const DiscordStrategy = require("passport-discord").Strategy;
const session = require("express-session");
require('dotenv').config();

const server = express();
server.set('view engine', 'ejs');
server.use(express.json());
server.use(express.urlencoded({ extended: true  }));

// Configure session
//
server.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false
  })
);
server.use(passport.initialize()) // Intializes Passport for incoming requests, allowing authentication strategies to be applied.
server.use(passport.session()) // Middleware that will restore login state from a session.

// Configure strategy
//
var scopes = ["identify", "email"/*, "guilds", "guilds.join"*/];
// identify : allows /users/@me without email
// email : enables /users/@me to return an email
// guilds : allows /users/@me/guilds to return basic information about all of a user's guilds
// guilds.join : allows /guilds/{guild.id}/members/{user.id} to be used for joining users to a guild
// ... more on https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:6060/auth/discord/callback',
      scope: scopes,
    },
    function (accessToken, refreshToken, profile, cb) {
    //   User.findOrCreate({ discordId: profile.id }, function (err, user) {
        return cb(null, profile);
     // });
    }
  )
);

// Passport Authentication 
//
server.get('/auth/discord', passport.authenticate('discord'));
server.get('/auth/discord/callback', passport.authenticate('discord', {
    failureRedirect: '/login'
}), function(req, res) {
    res.redirect('/home') // Successful auth
});

function checkAuthentication(req, res, next) {
  if(req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
}

// Serialize, Deserialize
//
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

// Routes
//
server.get('/home', checkAuthentication, (req, res) => {
  console.log(req.user); 
  res.render('home');
})
server.get('/login', (req, res) => {
  res.render('login');
})
server.get('/*', (req, res) => {
  res.render('404');
})
// Start Server
const port = process.env.PORT;
server.listen( port, () => {
    console.log(`Listening on http://localhost:${port}/`);
})