const authors = require("../models/authors.json");

// Get all
exports.getAllAuthors = (req, res) => {
  res.status(200).json(authors);
};

// Get by ID
exports.getAuthorById = (req, res) => {
  const { id } = req.params;
  res.status(200).json(authors.find((author) => author.id == id));
};

// Add a new entity
exports.addAuthor = (req, res) => {
  newauthors = [...authors]
  newauthors.push(req.body);
  res.status(201).json(newauthors);
};

// Update an entity by ID
exports.updateAuthor = (req, res) => {
  const item = req.params.id;
  const {
    id,
    name,
    birth_year,
    death_year,
    nationality,
    genre,
    notable_works,
    award,
    biography,
    image,
  } = req.body;
  res.send(
    updateProperty(
      item,
      id,
      name,
      birth_year,
      death_year,
      nationality,
      genre,
      notable_works,
      award,
      biography,
      image
    )
  );
};

const updateProperty = (
  item,
  id,
  name,
  birth_year,
  death_year,
  nationality,
  genre,
  notable_works,
  award,
  biography,
  image
) => {
  const author = authors.find((author) => author.id == item); // Using == for comparison
  if (author) {
    if (id) author.id = id;
    if (name) author.name = name;
    if (birth_year) author.birth_year = birth_year;
    if (death_year) author.death_year = death_year;
    if (nationality) author.nationality = nationality;
    if (genre) author.genre = genre;
    if (notable_works) author.notable_works = notable_works;
    if (award) author.award = award;
    if (biography) author.biography = biography;
    if (image) author.image = image;
    return authors;
  } else {
    console.log("author not found.");
  }
};

// Delete an entity by ID
exports.deleteAuthor = (req, res) => {
  const id = req.params.id;
  const newArray = [...authors].filter((author) => author.id != id); // ParseInt or avoid ====
  res.json(newArray);
};
