const axios = require("axios");
const { hashiL } = require("../helpers/passwordOps");
const uuid4 = require("uuid4");
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

exports.registerUser = async (username, email, password) => {
  return instance.post("/", {
    username,
    email,
    password : await hashiL(password), // HASHED USING BCRYPT
    uuid : uuid4() // UUID USING UUID4
  });
}; 