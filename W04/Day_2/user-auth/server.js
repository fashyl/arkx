const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');
const axios = require('axios');
const express = require("express");
const app = express();

const SECRET_KEY = "arkx"

// Functionality Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use((req, res, next) => { // To avoid tabbing back into the login page while already authenticated.
  res.set('Cache-Control', 'no-store');
  next();
});

app.get("/login", avoidAuthh, (req, res) => {
  res.render("login");
});

app.get("/register", avoidAuthh, (req, res) => {
  res.render("register");
});

app.get("/profile", isAuthenticated, (req, res) => {
  res.render("profile", { username: req.user.username });
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await axios.get("http://localhost:5000/users");
    const user = result.data.find(
      (user) => user.email == email && user.password == password
    );
    if (!user) {
      return res.status(401).send("Invalid credentials");
    }

    const token = jwt.sign({ email: user.email, username: user.username }, SECRET_KEY); //
    res.cookie('tokenJSON', token); // Store in the cookie
    res.status(302).redirect('/profile')
  } catch (error) {
    console.log(error);
  }
});

app.post("/register", (req, res) => {
  try {
    const { username, email, password } = req.body;
    const result = axios.post("http://localhost:5000/users", {
      username,
      email,
      password,
    });
    res.status(201).redirect("/login");
  } catch (error) {
    res.status(500).send("Error on server end..");
  }
});

// Middleware
function isAuthenticated(req, res, next) { // Check if authorized
  const token = req.cookies.tokenJSON
  if(!token) res.status(302).redirect('/login');

  const verify = jwt.verify(token, SECRET_KEY);
  if(!verify) res.status(302).redirect('/login');

  req.user = verify;
  next();
}

function avoidAuthh(req, res, next) { // To avoid having to authorize again
  const token = req.cookies.tokenJSON
  if(!token) next();
  
  const verify = jwt.verify(token, SECRET_KEY);
  if(!verify) res.status(302).redirect('/login');

  return  res.status(302).redirect('/profile')
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});