const express = require('express');
const { renderLogin, renderRegister, renderList, login, register } = require('../controllers/users');
const { isAuthenticated, avoidAuth } = require('../middlewares/auth');
const usersRouter = express.Router();

// Authors End-Points
usersRouter.get("/mylist", isAuthenticated, renderList)
usersRouter.get("/login", renderLogin)
usersRouter.get("/register", renderRegister)
usersRouter.post("/login", login)
usersRouter.post("/register", register)

module.exports = usersRouter;