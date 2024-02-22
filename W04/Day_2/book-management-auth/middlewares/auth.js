require('dotenv').config({path : '../.env'})
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY

// Middleware
exports.isAuthenticated = (req, res, next) => { // Check if authorized
    const token = req.cookies.func_author
    if(!token) res.status(302).redirect('/login');
  
    const verify = jwt.verify(token, secret);
    if(!verify) res.status(302).redirect('/login');
  
    req.user = verify;
    next();
  }
  

exports.avoidAuth = (req, res, next) => { // To avoid having to authorize again
    const token = req.cookies.func_author
    if(!token) next();
    
    const verify = jwt.verify(token, secret);
    if(!verify) res.status(302).redirect('/login');
  
    res.status(302).redirect('/mylist')
  }