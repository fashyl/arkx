const axios = require("axios");
const instance = axios.create({
  baseURL: "http://localhost:5000/users",
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});

exports.registerUserAPI = async (data) => {
    return instance.post('/', data);
}

exports.getUsersApi = async () => {
    return instance.get('/');
}