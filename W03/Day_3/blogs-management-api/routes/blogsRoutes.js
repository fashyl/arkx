const express = require('express');
const { getAllBlogs, addBlog, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogsCRUD');
const { authenticator, logger } = require('../middlewares/authenticator');
const blogs_router = express.Router();

// Blog End-Points
blogs_router.route('/blogs')
.get( logger, getAllBlogs )
.post( logger, addBlog );

// blogs_router.route('/search')
// .get( getBlogByBlogname )

blogs_router.route('/blogs/:id')
.get( logger, getBlogById )
.put( logger, authenticator, updateBlog )
.delete( logger, authenticator, deleteBlog );

module.exports = blogs_router;