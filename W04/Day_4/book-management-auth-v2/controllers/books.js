//const books = require("../models/to-dos");

const {
  viewBooksApi,
  createBookApi,
  viewBookApi,
  updateBookApi,
  deleteBookApi,
  addReviewApi,
} = require("../api/books");
const { Book } = require("../helpers/bookQuery");

//---Rendering (Front)---//
// Home
exports.viewBooks = async (req, res, next) => {
  try {
    const books = await viewBooksApi();
    res
      .status(200)
      .render("../views/auth/home.ejs", {
        books: books.data,
        username: req.user.username,
      });
  } catch (error) {
    res.status(500).render('../views/no-auth/500.ejs');
  }
};
// Single Book
exports.viewBook = async (req, res, next) => {
  try {
    const book = await viewBookApi(req.params.id);
    res.render("../views/auth/book.ejs", {
      book: book.data,
      username: req.user.username,
    });
  } catch (error) {
    res.status(404).render('../views/no-auth/404.ejs');
  }
};
// Editing an existing book
exports.renderEdit = async (req, res) => {
  try {
    const book = await viewBookApi(req.params.id);
    res.render("../views/auth/edit.ejs", {
      book: book.data,
      username: req.user.username,
    });
  } catch (error) {
    res.status(500).render('../views/no-auth/500.ejs');
  }
};
// Creating / Adding a book
exports.renderForm = (req, res) => {
  res.render("../views/auth/form.ejs", { username: req.user.username });
};

exports.render404 = (req, res) => {
  res.render("../views/no-auth/404.ejs");
};

//---(Back)---//
// Posting
exports.createBook = async (req, res, next) => {
  try {
    const { title, author, publication_year, genre, description } = req.body;
    const result = await createBookApi({
      title,
      author,
      publication_year,
      genre,
      description,
      authorId: req.user.uuid,
      cover_image: req.file.filename,
      reviews: [],
    }); // TOKEN PAYLOAD
    res.status(302).redirect("/mylist");
  } catch (error) {
    console.log(error);
  }
};
// Patching
exports.editBook = async (req, res, next) => {
  try {
    const data = ({
      title,
      author,
      publication_year,
      genre,
      description,
      // cover_image,
    } = req.body);
    if (req.file) {
      data.cover_image = '/cover/' + req.file.filename;
    } // else {
      // const cover = await Book.getCover(req.params.id);
      // data.cover_image = cover.substring(7);
    // }

    await updateBookApi(req.params.id, data);
    res.redirect("/mylist", 302);
  } catch (error) {
    console.log(error);
  }
};
// Deleting
exports.deleteBook = async (req, res, next) => {
  try {
    await deleteBookApi(req.params.id);
    res.redirect("/mylist", 301);
  } catch (error) {
    res.status(500).render('../views/no-auth/500.ejs');
  }
};

// Adding a review
exports.addReview = async (req, res, next) => {
  try {
    const { comment } = req.body;
    const result = await addReviewApi(req.params.id, { user : req.user.username, comment });
    res.redirect(`/${req.params.id}`, 301);
  } catch (error) {
    res.status(500).render('../views/no-auth/500.ejs');
  }
}