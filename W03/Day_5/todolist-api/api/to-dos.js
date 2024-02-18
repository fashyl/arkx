const axios = require("axios");
const instance = axios.create({
  baseURL: "http://localhost:5000/todos",
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});

exports.viewToDosApi = () => {
  return instance.get("/");
};

exports.viewToDoApi = (id) => {
  return instance.get(`/${id}`);
};

exports.createToDoApi = (body) => {
  return instance.post(`/`, body);
};

// exports.updateBlogApi = (id, body) => {
//   return apii.put(`/todos/${id}`, body);
// };

// exports.deleteBlogApi = (id) => {
//   return apii.delete(`/todos/${id}`, id);
// };
