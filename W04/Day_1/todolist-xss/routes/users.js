const express = require('express');
const { renderLogin, renderRegister, registerUser, loginUser, renderProfile } = require('../controllers/users');
const { isAuth } = require('../middlewares/authenticator');
const users_router = express.Router();

users_router.route('/login')
.all(avoidAuth) //N9iya
.get(renderLogin)
.post(loginUser)

users_router.route('/register')
.all(avoidAuth) // N9iya
.get(renderRegister)
.post(registerUser)

users_router.get('/profile', isAuth, renderProfile);

module.exports = users_router;