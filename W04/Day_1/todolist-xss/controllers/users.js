const { registerUserAPI } = require("../api/users");
const uuid4 = require("uuid4"); // UUID
const bcrypt = require('bcrypt'); // Hashing
const { User } = require("../helpers/userQuery");
const { checkiL, hashiL } = require("../helpers/hashing");
const { sign } = require("../helpers/jwt");


exports.renderLogin = (req, res) => {
  res.render("login");
};

exports.renderRegister = (req, res) => {
  res.render("register");
};

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPass = await hashiL(password); // We never store the actual password
    const result = await registerUserAPI({ username, email, password : hashedPass, authorId : uuid4() });
    if (!result) return res.status(404).send("Something went wrong.");
    res.status(301).redirect("/login");
  } catch (error) {
    console.log(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const {email, password } = req.body;
    const user = User.findUser(email);
    console.log('before :', user);
    if (!user) return res.status(404).send("Something went wrong.");
    if(!(User.matchPassword(user.password, password))) return res.status(404).send("Incorrect Password.");
    delete user.password;
    delete user.id;
    console.log('after :', user);
    const token = await sign(user);
    console.log(token);
    res.send('Logged In');
  } catch (error) {
    console.log(error);
  }
};

exports.renderProfile = (req, res) => {
    res.render('profile');
}