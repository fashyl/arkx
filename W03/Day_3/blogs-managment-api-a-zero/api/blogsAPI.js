const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:5000/blogs',
    timeout: 2000,
    headers: {'Content-Type': 'application/json'}
  });
  
  exports.getAllBlogsApi = () => {
      return instance.get('/');
  }

  exports.getBlogByIdApi = (id) => {
      return instance.get(`/${id}`);
  }

exports.updateBlogApi = (id, body) => {
    return instance.patch(`/${id}`, body);
}   

exports.deleteBlogApi = (id) =>{
    return instance.delete(`/${id}`);
}


exports.addBlogApi = (data)=>{
    return instance.post(`/`,data);
}