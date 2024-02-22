const axios = require("axios");
const instance = axios.create({
  baseURL: "http://localhost:5000/users",
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});

exports.getUsersApi = () => {
    return instance.get('/');
}

exports.getUserApi = (id) => {
  return instance.get(`/${id}`)
}

exports.registerUser = (username, email, password) => {
  return instance.post("/", {
    username,
    email,
    password,
    works: []
  });
}; 