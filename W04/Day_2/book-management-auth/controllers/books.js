//const books = require("../models/to-dos");

const {
  viewBooksApi,
  createBookApi,
  viewBookApi,
  updateBookApi,
  deleteBookApi,
} = require("../api/books");

// CRUD Operations
exports.viewBooks = async (req, res, next) => {
  try {
    const books = await viewBooksApi();
    res.status(200).render("../views/auth/home.ejs", { books: books.data });
  } catch (error) {
    res.status(500).send("Problem on server's end.. \nERROR | " + error.message);
  }
};

exports.viewBook= async (req, res, next) => {
  try {
    const book = await viewBookApi(req.params.id);
    res.render("../views/auth/book.ejs", { book: book.data });
  } catch (error) {
    res.status(500).send("Problem on server's end.. \nERROR | " + error);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const { title, author, publication_year, genre, description, cover_image } =
      req.body;
    const result = await createBookApi({ title, author, publication_year, genre, description, cover_image , user_id: req.user.id});
    res.status(302).redirect("/mylist");
  } catch (error) {
    console.log(error);
    res.status(500).send("Problem on server's end.. \nERROR | " + error);
  }
};

exports.editBook = async (req, res, next) => {
  try {
    const { title, author, publication_year, genre, description } = req.body;
    await updateBookApi(req.params.id, { title, author, publication_year, genre, description, user_id: req.user.id});
    res.redirect("/mylist", 302);
  } catch (error) {
    res.status(500).send("Problem on server's end.. \nERROR | " + error);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    await deleteBookApi(req.params.id);
    res.redirect("/mylist", 301);
  } catch (error) {
    res.status(500).send("Problem on server's end.. \nERROR | " + error);
  }
};

exports.renderEdit = async (req, res) => {
  try {
    const book = await viewBookApi(req.params.id);
    res.render("../views/auth/edit.ejs", { book: book.data });
  } catch (error) {
    res.status(500).send("Problem on server's end.. \nERROR | " + error.message);
  }
};

exports.renderForm = (req, res) => {
  res.render("../views/auth/form.ejs");
};