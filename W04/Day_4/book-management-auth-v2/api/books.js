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
    genre: body.genre,
    cover_image: '/cover/' + body.cover_image,
    reviews
  }
  return instance.post(`/`, newBook);
};

exports.updateBookApi = (id ,body) => {
  return instance.patch(`/${id}`, body);
};

exports.deleteBookApi = (id) => {
  return instance.delete(`/${id}`, id);
};

exports.addReviewApi = async (id, body) => {
  const book = await this.viewBookApi(id)
  const newReviews = {
    reviews : [ ...book.data.reviews, body ]
  }
  return instance.patch(`/${id}`, newReviews);
}