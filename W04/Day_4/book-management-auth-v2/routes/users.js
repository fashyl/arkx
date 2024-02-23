const express = require('express');
const { renderLogin, renderRegister, renderList, login, register, logout } = require('../controllers/users');
const { isAuthenticated, avoidAuth } = require('../middlewares/authOps');
const { validateUserEntries } = require('../middlewares/validator');
const { sanitize } = require('../middlewares/sanitizer');
const { logger } = require('../middlewares/utility');
const usersRouter = express.Router();

// Authors End-Points
usersRouter.all(logger, sanitize, validateUserEntries)
usersRouter.get("/mylist", isAuthenticated, renderList)
usersRouter.get("/login", avoidAuth, renderLogin)
usersRouter.get("/register", avoidAuth, renderRegister)
usersRouter.get("/logout", logout)
usersRouter.post("/login", login)
usersRouter.post("/register", register)

module.exports = usersRouter;