const { Book } = require("../helpers/bookQuery");
const { verify } = require("../helpers/jwtOps");

// Authenticate using the created TOKEN KEY
exports.isAuthenticated = (req, res, next) => { // Check if authorized
  const token = req.cookies.JWT_USER_AUTH;
  if(!token) return res.status(302).redirect('/login');
  const verified = verify(token);
  if(!verified) return res.status(302).redirect('/login');
  req.user = verified;
  next();
}

exports.avoidAuth = (req, res, next) => { // To avoid having to authorize again
  const token = req.cookies.JWT_USER_AUTH || null;
  if(!token) next();
  if(!verify(token)) next();
  return res.status(302).redirect('/mylist')
}

exports.isTheAuthor = async (req, res, next) => {
  const token = req.cookies.JWT_USER_AUTH;
  try {
      const book = await Book.findBook(req.params.id)
      if(req.user.uuid != book.data.authorId) res.send('Unauthorized..'); 
      else next();
    } catch (error) {
      console.log(error);
    }
  }