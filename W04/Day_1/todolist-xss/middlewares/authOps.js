const { viewToDoApi } = require("../api/to-dos");
const { verify } = require("../helpers/jwt");
const { ToDo } = require("../helpers/todoQuery");

exports.logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

exports.authenticator = async (req, res, next) => {
   const todo = await viewToDoApi(req.params.id)
   console.log(todo.data);
   if (todo.data.user_id == req.headers.user_id) {
    next();
  } else {
    res.status(401).redirect('/');
  }
};

exports.isAuth = (req, res, next) => {
  try {
    const token = req.cookies.JWT_AUTH_TOKEN || false
    if(!token) res.status(302).redirect('/login');
    if(!verify(token)) res.status(302).redirect('/login');
    req.user = verify;
    next();
  } catch (error) {
    console.log(error);
  }
}

exports.avoidAuth = (req, res, next) => {
  try {
    const token = req.cookies.JWT_AUTH_TOKEN || false
    if(!token) next()
    if(!verify(token)) next()

  } catch (error) {
    console.log(error);
  }
}

exports.isAuthor = async (req, res, next) => {
  try {
    const todo = await ToDo.findTodo(req.params.id);
    if(!(ToDo.matchTodo(todo.authorId, req.user.authorId))) res.status(302).redirect('/');
    next();
  } catch (error) {
    console.log(error);
  }
}