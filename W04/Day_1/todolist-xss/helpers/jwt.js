const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.sign = (data) => {
    return jwt.sign( data, process.env.JWT_TOKEN_KEY)
}

exports.verify = (token) => {
    return jwt.verify( token, process.env.JWT_TOKEN_KEY)
}