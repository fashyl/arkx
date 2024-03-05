const jwt = require("jsonwebtoken");
const { codes } = require("../config/http");
require("dotenv").config({ path: "../.env" });
const secretKey = process.env.JWT_PRIVATE_KEY;
exports.sign = (payload) => {
  return jwt.sign(payload, secretKey, {
    algorithm: "HS256", // JWT Signing Algorithm
    expiresIn: "1h", // if ommited, the token will not expire
  });
};

exports.verify = (req, res, next, signed) => {
  return jwt.verify(
    signed,
    secretKey,
    {
      algorithms: ["HS256"],
    },
    (error, payload) => {
      if (error) {
        if (error.name === "TokenExpiredError") {
          return res
            .status(codes.UNAUTHORIZED)
            .send("Unauthorized. Token has expired.");
        }
        return res.status(codes.FORBIDDEN).send("Forbidden. Invalid token.");
      }
      req.user = payload;
      next();
    }
  );
};
