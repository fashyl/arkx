const { getBlogByIdApi } = require("../api/blogsAPI");
const { getUserByIdApi } = require("../api/usersAPI");



// Middleware 1: Logging middleware
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// Middleware 2: Authentication middleware
async function authenticator(req, res, next) {
   const blog = await getBlogByIdApi(req.params.id)
   console.log(blog.data);
   if (blog.data.author == req.headers.author) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = {
  authenticator,
  logger,
}