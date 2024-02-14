const axios = require("axios");

const apii = axios.create({
    baseURL : 'http://localhost:5000/',
    timeout : 2000, // If not recovered in 2 seconds, throw error
    Headers : {
        'Content-Type' : 'application/json',
    }
});

exports.getAllBlogsApi = () => { 
    return apii.get('/blogs/')
}

exports.getBlogByIdApi = (id) => { 
    return apii.get(`/blogs/${id}`);
}

exports.addBlogApi = (body) => { 
    return apii.post(`/blogs`, body);
}

exports.updateBlogApi = (id, body) => { 
    return apii.put(`/blogs/${id}`, body);
}

exports.deleteBlogApi = (id) => { 
    return apii.delete(`/blogs/${id}`, id);
}
    