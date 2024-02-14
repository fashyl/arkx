const axios = require("axios");

const api = axios.create({
    baseURL : 'http://localhost:5000/users',
    timeout : 2000,
    Headers : {
        'Content-Type' : 'application/json',
    }
});

exports.getAllUsersApi = () => { 
    return api.get('/')
}

exports.getUserByIdApi = (id) => { 
    return api.get(`/${id}`);
}

exports.addUserApi = (body) => { 
    return api.post(`/`, body);
}

exports.updateUserApi = (id, body) => { 
    return api.put(`/${id}`, body);
}

exports.deleteUserApi = (id) => { 
    return api.delete(`/${id}`, id);
}
    
// exports.getUserByUsernameApi = (username) => { 
    //     const userInput = username.trim().toLowerCase()
    //     return api.get(`/search?username=${username}`, username);
    // }