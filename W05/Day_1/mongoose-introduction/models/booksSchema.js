const mongoose= require("mongoose");
const Book = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: Array,
    required: true,
    trim: true,
  },
  publication_year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  }
});

module.exports = mongoose.model('books', Book);