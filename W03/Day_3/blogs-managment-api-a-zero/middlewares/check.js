const {checkBlog} = require("../helpers/checkBlog")


exports.check = async(req,res,next)=>{
    const response = {}
    const id = req.params.id
    const author = req.headers.authorid
    const settled = await checkBlog(id,author)
    req.developer = "ayman"
    response.msg = "you are not authorized for this operation"
    response.status = 401
    return settled ? next():res.status(401).json(response)
}