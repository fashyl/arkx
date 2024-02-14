const { getAllBlogsApi, getBlogByIdApi, addBlogApi, deleteBlogApi, updateBlogApi } = require("../api/blogsAPI");

exports.getAllBlogs = async (req, res) => { 
    try {
        const blogs = await getAllBlogsApi()
        console.log(blogs.data)
        res.status(200).json(blogs.data);
    } catch (error) {
        res.status(500).send(`Error on Server End : \n ${error}`);
    }
}

exports.getBlogById = async (req, res) => { 
    try {
        const blog = await getBlogByIdApi(req.params.id)
        console.log(blog.data);
        res.status(200).json(blog.data)
    } catch (error) {
        res.status(500).send(`Error on Server end : \n ${error}`)
    }
}


exports.addBlog = async (req, res) => { 
    try {
        await addBlogApi(req.body)
        res.status(201).send(`Blog ${req.body.title} Added Successfully.`)
    } catch (error) {
        res.status(500).send(`Error on Server end : \n ${error}`)
    }
}

exports.updateBlog = async (req, res) => { 
    try {
        await updateBlogApi(req.params.id, req.body);
        res.status(202).send(`Blog id: ${req.params.id} Updated Successfully.`)
    } catch (error) {
        // res.status(500).send(`Error on Server end : \n ${error}`)
        res.status(500).send(error.message);
    }
}

exports.deleteBlog = async (req, res) => { 
    try {
        const blog = await deleteBlogApi(req.params.id);
        res.status(202).send(`Blog ${blog.data.title} Deleted Successfully.`)
    } catch (error) {
        // res.status(500).send(`Error on Server end : \n ${error}`)
        res.status(500).send(error.message);
    }
}