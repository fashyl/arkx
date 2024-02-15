const { getAllBlogsApi, updateBlogApi, addBlogApi,deleteBlogApi,getBlogByIdApi } = require("../api/blogsAPI")

exports.getAllBlogs = async (req, res) => {
  const blogs = await getAllBlogsApi();
  console.log(blogs.data);
  res.status(200).send(blogs.data);
}

exports.getBlogById = async (req, res) => {
  const blog = await getBlogByIdApi(req.params.id);
  console.log(blog.data);
  res.status(200).send(blog.data);
}

exports.updateBlog = async (req, res) => {
  const blog = await updateBlogApi(req.params.id, req.body);
  res.status(201).json({
    message:"blogs updated",
    updated:blog.data,
    developer:req.developer
  })  
}

exports.deleteBlog = async(req,res)=>{
  const blog = await deleteBlogApi(req.params.id)
  res.status(200).send(`Blog ${req.params.id} deleted succesfully.`)  

}

exports.AddBlog = async(req,res)=>{
  console.log(req.headers)
  const newData = {
    ...req.body,
    authorid:req.headers.authorid
  }

  const blog = await addBlogApi(newData)
  res.status(201).json({
    message:"blogs created",
    created:blog.data
  })  
}
