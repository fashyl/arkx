const express = require('express');
const { getAllBlogs,deleteBlog, updateBlog,AddBlog, getBlogById } = require('../controllers/blogs');
const { check } = require('../middlewares/check');
const blogs_router = express.Router();

blogs_router.route('/')
.get( getAllBlogs )
.post(AddBlog)

blogs_router.route('/:id')
.get( getBlogById )
.put( check,updateBlog )
.delete(check,deleteBlog)

module.exports = blogs_router
