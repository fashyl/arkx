//const books = require("../models/to-dos");

const {
  viewBooksApi,
  createBookApi,
  viewBookApi,
  updateBookApi,
  deleteBookApi,
} = require("../api/books");
const { User } = require("../helpers/userQuery");

//---Rendering (Front)---//
// Home
exports.viewBooks = async (req, res, next) => {
  try {
    const books = await viewBooksApi();
    res.status(200).render("../views/auth/home.ejs", { books: books.data, username : req.user.username });
  } catch (error) {
    res.status(500).send("Problem on server's end.. \nERROR | " + error.message);
  }
};
// Single Book
exports.viewBook= async (req, res, next) => {
  try {
    const book = await viewBookApi(req.params.id);
    res.render("../views/auth/book.ejs", { book: book.data, username : req.user.username});
  } catch (error) {
    res.status(500).send("Problem on server's end.. \nERROR | " + error);
  }
};
// Editing an existing book
exports.renderEdit = async (req, res) => {
  try {
    const book = await viewBookApi(req.params.id);
    res.render("../views/auth/edit.ejs", { book: book.data, username : req.user.username });
  } catch (error) {
    res.status(500).send("Problem on server's end.. \nERROR | " + error.message);
  }
};
// Creating / Adding a book
exports.renderForm = (req, res) => {
  res.render("../views/auth/form.ejs", { username : req.user.username });
};

//---(Back)---//
// Posting
exports.createBook = async (req, res, next) => {
  try {
    const { title, author, publication_year, genre, description } =
      req.body;
    const result = await createBookApi({ title, author, publication_year, genre, description, authorId: req.user.uuid, cover_image: req.file.filename}); // TOKEN PAYLOAD
    res.status(302).redirect("/mylist");
  } catch (error) {
    console.log(error);
    res.status(500).send("Problem on server's end.. \nERROR | " + error);
  }
};
// Patching
exports.editBook = async (req, res, next) => {
  try {
    const { title, author, publication_year, genre, description } = req.body;
    await updateBookApi(req.params.id, { title, author, publication_year, genre, description, authorId: req.user.uuid, cover_image: req.file.filename}); // TOKEN PAYLOAD
    res.redirect("/mylist", 302);
  } catch (error) {
    res.status(500).send("Problem on server's end.. \nERROR | " + error);
  }
};
// Deleting
exports.deleteBook = async (req, res, next) => {
  try {
    await deleteBookApi(req.params.id);
    res.redirect("/mylist", 301);
  } catch (error) {
    res.status(500).send("Problem on server's end.. \nERROR | " + error);
  }
};
