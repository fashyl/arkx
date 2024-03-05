const { codes, messages } = require("../config/http");
const { verify } = require("../helpers/jwt");
const { Product } = require("../models/schemas/product");

// Authenticate using the created TOKEN KEY
exports.checkAuthentication = (req, res, next) => {
  // Check if authorized
  const token = req.cookies.AUTH_TOKEN || null;
  if (!token)
    return res
      .status(codes.UNAUTHORIZED)
      .send("Unauthorized. Token not provided.");
  const decoded = verify(req, res, next, token);
};

exports.isOwner = async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  // console.log('owner :', product.owner,'userId: ',req.user.userId)
  // owner : new ObjectId('65e656f5a0a3a6fddf44f415') userId:  65e656f5a0a3a6fddf44f415
  if (!product) return res.status(codes.NOT_FOUND).send("Product not found.");
  // differences in object references. Use this instead
  else if (!product.owner.equals(req.user.userId)/*product.owner !== req.user.userId*/) {
    return res
      .status(codes.FORBIDDEN)
      .send("Forbidden. You do not have permission to access this resource.");
  } else {
    next(); 
  }
};

// Needed once I start rendering login/register pages
// exports.avoidAuth = (req, res, next) => { // To avoid having to authorize again
//     const token = req.cookies.AUTH_TOKEN || null;
//     if (!token) return next(); // solution to jwt must be provided is return
//     if (!verify(token)) return next();
//     return res.status(codes.FOUND).redirect("/profile");
// };