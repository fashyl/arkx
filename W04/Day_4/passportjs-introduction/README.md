## Simple, unobtrusive authentication for Node.js
Passport is authentication middleware for [Node.js](https://nodejs.org/). Extremely flexible and modular, Passport can be unobtrusively dropped in to any [Express](https://expressjs.com/)-based web application. A comprehensive set of strategies support authentication using a [username and password](https://www.passportjs.org/docs/username-password/), [Facebook](https://www.passportjs.org/docs/facebook/), [Twitter](https://www.passportjs.org/docs/twitter/), and [more](https://www.passportjs.org/packages/).

500+ Strategies Now! [View All Strategies](https://www.passportjs.org/packages/)

### Requirements
- package dyal passport : `npm install passport `
- package dyal strategie li biti `passport-google-oauth20` `passport-github2`
For the purpose of introducing passport.js, we'll use `passport-local`, a strategy for authenticating with a username and password.

**Notes**: Session based authentication. (`npm install express-session`)
### How-To Configure a Session
```js
// Import required modules
const express = require('express');
const session = require('express-session');

// Create an Express app
const app = express();

// Configure session middleware
app.use(
  session({
    secret: 'mySecretKey', // Secret key used to sign the session ID cookie
    resave: false, // Whether to save the session for every request, even if it hasn't changed
    saveUninitialized: true // Whether to save uninitialized sessions (new but not modified)
  })
);

// Define a route to set a session variable
app.get('/set-session', (req, res) => {
  req.session.username = 'Said'; // Set the value of the 'username' session variable
  res.send('Session variable set');
});

// Define a route to get the session variable
app.get('/get-session', (req, res) => {
  const username = req.session.username; // Get the value of the 'username' session variable
  res.send(`Username: ${username}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```
### Session object
```js
console.log(req.session)
// returns
Session {
  cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true },
  passport: {
    user: { username: 'admin', id: '610960a8-085a-428b-9490-2b73e51684c3' }
  } // data specified in the arguments parameters of done()
  // done(null, { username, id: uuid()});
}
```