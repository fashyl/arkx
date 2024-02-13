const books = require("../models/books.json");

// Get all
exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// Get by ID
exports.getBookById = (req, res) => {
  const { id } = req.params;
  res.status(200).json(books.find((book) => book.id == id));
};

// Add a new entity
exports.addBook = (req, res) => {
  const newlist = [...books];
  newlist.push(req.body);
  res.status(201).json(newlist);
};

// Update an entity by ID
exports.updateBook = (req, res) => {
  const item = req.params.id;
  const {
    id,
    title,
    author,
    publication_year,
    genre,
    description,
    cover_image,
  } = req.body;
  res.send(
    updateProperty(
      item,
      id,
      title,
      author,
      publication_year,
      genre,
      description,
      cover_image
    )
  );
};

const updateProperty = (
  item,
  id,
  title,
  author,
  publication_year,
  genre,
  description,
  cover_image
) => {
  const book = books.find((book) => book.id == item); // Using == for comparison
  if (book) {
    if (id) book.id = id;
    if (title) book.title = title;
    if (author) book.author = author;
    if (publication_year) book.publication_year = publication_year;
    if (genre) book.genre = genre;
    if (description) book.description = description;
    if (cover_image) book.cover_image = cover_image;
    return books;
  } else {
    console.log("book not found.");
  }
};

// Delete an entity by ID
exports.deleteBook = (req, res) => {
  const id = req.params.id;
  const newArray = [...books].filter((book) => book.id != id); // ParseInt or avoid ====
  res.json(newArray);
};
