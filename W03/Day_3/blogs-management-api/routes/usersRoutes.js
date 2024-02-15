const express = require('express');
const { getAllUsers, addUser, getUserById, updateUser, deleteUser } = require('../controllers/usersCRUD');
const { logger } = require('../middlewares/authenticator');
const users_router = express.Router();

// User End-Points
users_router.route('/')
.get( logger ,getAllUsers )
.post( logger, addUser );

// users_router.route('/search')
// .get( logger, getUserByUsername )

users_router.route('/:id')
.get( logger, getUserById )
.put( logger, updateUser )
.delete( logger, deleteUser );

module.exports = users_router;