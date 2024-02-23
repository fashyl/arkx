const axios = require("axios");
const instance = axios.create({
  baseURL: "http://localhost:5000/books",
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});

exports.viewBooksApi = () => {
  return instance.get("/");
};

exports.viewBookApi = (id) => {
  return instance.get(`/${id}`);
};

exports.createBookApi = (body) => {
  const newBook = {
    title: body.title,
    authorId: body.authorId, // user_id -> authorId, should be a uuid
    author: body.author,
    publication_year: body.publication_year,
    description: body.description,
    genre: [ body.genre ],
    cover_image: '/cover/' + body.cover_image,
  }
  return instance.post(`/`, newBook);
};

exports.updateBookApi = (id ,body) => {
  const newEdit = {
    title: body.title,
    authorId: body.authorId, // user_id -> authorId, should be a uuid
    author: body.author,
    publication_year: body.publication_year,
    description : body.description,
    genre : [ body.genre ],
    cover_image: '/cover/' + body.cover_image,
  }
  return instance.patch(`/${id}`, newEdit);
};

exports.deleteBookApi = (id) => {
  return instance.delete(`/${id}`, id);
};