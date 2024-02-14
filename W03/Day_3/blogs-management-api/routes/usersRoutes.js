const express = require('express');
const { getAllUsers, addUser, getUserById, updateUser, deleteUser } = require('../controllers/usersCRUD');
const users_router = express.Router();

// User End-Points
users_router.route('/')
.get( getAllUsers )
.post( addUser );

// users_router.route('/search')
// .get( getUserByUsername )

users_router.route('/:id')
.get( getUserById )
.put( updateUser )
.delete( deleteUser );

module.exports = users_router;