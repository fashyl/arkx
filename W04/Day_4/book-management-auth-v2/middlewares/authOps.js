const { Book } = require("../helpers/bookQuery");
const { verify } = require("../helpers/jwtOps");

// Authenticate using the created TOKEN KEY
exports.isAuthenticated = (req, res, next) => { // Check if authorized
  const token = req.cookies.JWT_USER_AUTH || null;
  if(!token) return res.redirect('/login')
  const verified = verify(token);
  if(!verified) return res.status(401).render('../views/no-auth/401.ejs');
  req.user = verified;
  next();
}

exports.avoidAuth = (req, res, next) => { // To avoid having to authorize again
  const token = req.cookies.JWT_USER_AUTH || null;
  if(!token) return next(); // solution to jwt must be provided is return
  if(!verify(token)) return next();
  return res.status(302).redirect('/mylist')
}

exports.isTheAuthor = async (req, res, next) => {
  const token = req.cookies.JWT_USER_AUTH;
  try {
      const book = await Book.findBook(req.params.id)
      if(req.user.uuid != book.data.authorId) res.status(401).render('../views/auth/401.ejs') 
      else next();
    } catch (error) {
      console.log(error);
    }
  }