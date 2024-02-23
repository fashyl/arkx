const { viewBooksApi } = require("../api/books");
const { registerUser } = require("../api/users");
const { sign } = require("../helpers/jwtOps");
const { checkiL, hashiL } = require("../helpers/passwordOps");
const { User } = require("../helpers/userQuery");

//---(Front)---//
// Login
exports.renderLogin = (req, res) => {
  try {
    return res.render("../views/no-auth/login.ejs");
  } catch (error) {
    res.status(500).send(`Error On Server End, \n ${JSON.stringify(error)}`);
  }
};
// Register
exports.renderRegister = (req, res) => {
  try {
    return res.render("../views/no-auth/register.ejs");
  } catch (error) {
    res.status(500).send(`Error On Server End, \n ${JSON.stringify(error)}`);
  }
};

// Profile
exports.renderList = async (req, res) => {
  try {
    const books = await viewBooksApi();
    const hisList = books.data.filter((book) => req.user.uuid == book.authorId);
    res.render("../views/auth/mylist.ejs", { hisList , username : req.user.username});
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error On Server End, \n ${JSON.stringify(error)}`);
  }
};
exports.logout = (req, res) => {
  res.cookie('JWT_USER_AUTH', '', { expires: new Date(0)});
  res.redirect(302, '/login');
}

//---(Back)---//
// Post Login
exports.login = async (req, res) => {
  try {

    const { username, password } = req.body;
    const user = await User.findUser(username);
    const valid = await checkiL(password, user.password);
    if (!valid) { // If invalid, 
      return res.status(401).send("Invalid credentials.."); // VIEW 
    }

    const token = sign({ uuid: user.uuid, username : user.username })
    res.cookie("JWT_USER_AUTH", token); // RENAMED THE COOKIE!!!
    res.status(301).redirect("/mylist");
  } catch (error) {
    console.log(error)
    res.status(500).send("Error on server end..\n" + JSON.stringify(error));
  }
};

// Post Register
exports.register = async (req, res) => {
  try {
    const { username, email, password} = req.body;
    const result = await registerUser(username, email, password);
    res.status(201).redirect("/login");
  } catch (error) {
    res.status(500).send("Error on server end..");
  }
};
