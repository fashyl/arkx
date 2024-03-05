const express = require('express');
const { register, login, logout } = require('../controllers/authentication');
const { getUserProfile, deleteUserProfile, updateUserProfile } = require('../controllers/profile');
const { checkAuthentication } = require('../middlewares/authenticator');
const nodemailer = require('../middlewares/nodemailer');
const { registerPic, updatePic } = require('../middlewares/multer');
const usersRouter = express.Router();

//   Handles authentication-related endpoints
//   such as login, registration, and logout.
usersRouter.get('/logout', logout) // Login existing user. Returns JWT token.
usersRouter.post('/register', registerPic.single('profile_pic'), register, nodemailer) // Register a new user. Upon successful registration, an email confirmation is sent.
usersRouter.post('/login' ,login) // Login existing user. Returns JWT token.

//   handle endpoints related to user profiles, such as 
//   retrieving profile information, updating and deleting profiles.
usersRouter.get('/', checkAuthentication, getUserProfile) // Get current user's profile information.
usersRouter.patch('/', checkAuthentication, updatePic.single('profile_pic'), updateUserProfile) // Update current user's profile.
usersRouter.delete('/', checkAuthentication, deleteUserProfile) // Delete current user's profile.

module.exports = usersRouter;