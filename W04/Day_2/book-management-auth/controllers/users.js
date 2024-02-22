const { viewBooksApi } = require("../api/books");
const { getUsersApi, registerUser } = require("../api/users");
require("dotenv").config({ path: "../.env" });
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

exports.renderLogin = (req, res) => {
  try {
    return res.render("../views/no-auth/login.ejs");
  } catch (error) {
    res.status(500).send(`Error On Server End, \n ${JSON.stringify(error)}`);
  }
};

exports.renderRegister = (req, res) => {
  try {
    return res.render("../views/no-auth/register.ejs");
  } catch (error) {
    res.status(500).send(`Error On Server End, \n ${JSON.stringify(error)}`);
  }
};

exports.renderList = async (req, res) => {
  try {
    console.log(req.data)
    const books = await viewBooksApi();
    const hisList = books.data.filter((book) => req.user.id == book.user_id);
    res.render("../views/auth/mylist.ejs", { hisList });
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error On Server End, \n ${JSON.stringify(error)}`);
  }
};

exports.login = async (req, res) => {
  try {
    const result = await getUsersApi();
    const { username, password } = req.body;
    const user = result.data.find(
      (user) => user.username == username && user.password == password
    );

    if (!user) {
      return res.status(401).send("Invalid credentials..");
    }

    const token = jwt.sign(
      { email: user.email, username: user.username, id: user.id },
      secret
    ); //
    res.cookie("func_author", token); // Store in the cookie
    res.status(301).redirect("/mylist");
  } catch (error) {
    console.log(error)
    res.status(500).send("Error on server end..\n" + JSON.stringify(error));
  }
};

exports.register = async (req, res) => {
  try {
    const { username, email, password} = req.body;
    const result = await registerUser(username, email, password);
    res.status(201).redirect("/login");
  } catch (error) {
    res.status(500).send("Error on server end..");
  }
};
