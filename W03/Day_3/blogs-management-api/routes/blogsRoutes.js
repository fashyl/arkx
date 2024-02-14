const express = require('express');
const { getAllBlogs, addBlog, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogsCRUD');
const blogs_router = express.Router();

// Blog End-Points
blogs_router.route('/blogs')
.get( getAllBlogs )
.post( addBlog );

// blogs_router.route('/search')
// .get( getBlogByBlogname )

blogs_router.route('/blogs/:id')
.get( getBlogById )
.put( updateBlog )
.delete( deleteBlog );

module.exports = blogs_router;