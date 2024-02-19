const { viewToDoApi } = require("../api/to-dos");

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
    res.status(401).send('Unauthorized.');
  }
};