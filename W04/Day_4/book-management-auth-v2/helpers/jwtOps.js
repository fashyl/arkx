const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../.env'});

exports.sign = (data) => {
    return jwt.sign( data, process.env.KEY)
}

exports.verify = (token) => {
    return jwt.verify( token, process.env.KEY)
}