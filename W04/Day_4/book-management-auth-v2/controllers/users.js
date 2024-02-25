const { viewBooksApi } = require("../api/books");
const { registerUser } = require("../api/users");
const { sign } = require("../helpers/jwtOps");
const { checkiL } = require("../helpers/passwordOps");
const { User } = require("../helpers/userQuery");

//---(Front)---//
// Login
exports.renderLogin = (req, res) => {
  try {
    return res.render("../views/no-auth/login.ejs", { error : null});
  } catch (error) {
    if (error.response.status == 404)
      return res.status(404).render("../views/no-auth/404.ejs");
    res.status(500).render("../views/no-auth/500.ejs");
  }
};
// Register
exports.renderRegister = (req, res) => {
  try {
    return res.render("../views/no-auth/register.ejs");
  } catch (error) {
    if (error.response.status == 404)
      return res.status(404).render("../views/no-auth/404.ejs");
    res.status(500).render("../views/no-auth/500.ejs");
  }
};

// Profile
exports.renderList = async (req, res) => {
  try {
    const books = await viewBooksApi();
    const hisList = books.data.filter((book) => req.user.uuid == book.authorId);
    res.render("../views/auth/mylist.ejs", {
      hisList,
      username: req.user.username,
    });
  } catch (error) {
    if (error.response.status == 404)
      return res.status(404).render("../views/no-auth/404.ejs");
    res.status(500).render("../views/no-auth/500.ejs");
  }
};
exports.logout = (req, res) => {
  res.cookie("JWT_USER_AUTH", "", { expires: new Date(0) });
  res.redirect(302, "/login");
};

//---(Back)---//
// Post Login
exports.login = async (req, res) => {
  try { // Has a major flaw, but functions.
    const { username, password } = req.body;
    const user = await User.findUser(username);
    const valid = await checkiL(password, user.password);
    console.log(valid);
    if (!valid) return res.render('../views/no-auth/login.ejs', { error: "Invalid credentials" });

    const token = sign({ uuid: user.uuid, username: user.username });
    res.cookie("JWT_USER_AUTH", token); 
    res.status(301).redirect("/mylist");
  } catch (error) {
    console.log(error)
    res.render('../views/no-auth/login.ejs', { error: "Invalid credentials" })
  }
};

// Post Register
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const result = await registerUser(username, email, password);
    res.status(201).redirect("/login");
  } catch (error) {
    if (error.response.status == 404)
      return res.status(404).render("../views/no-auth/404.ejs");
    res.status(500).render("../views/no-auth/500.ejs");
  }
};
