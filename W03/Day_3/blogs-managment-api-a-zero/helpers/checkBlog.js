
const {getBlogByIdApi} =require("../api/blogsAPI")
exports.checkBlog = async(blogId,authorId)=>{
    const blog = await getBlogByIdApi(blogId)
    return blog.data.authorid == authorId
}