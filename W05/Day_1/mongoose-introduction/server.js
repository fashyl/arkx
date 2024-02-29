const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const server = express();
const port = 5050;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Mongoose
//
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;
const User = require("./models/usersSchema");
const Book = require("./models/booksSchema");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);

// (Ayman)
//
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    )
  )
  .catch((error) => console.dir(error));

// CRUD

// CREATE
const validId = (id) => mongoose.Types.ObjectId.isValid(id);
server.post("/add/user", async (req, res, next) => {
//     console.log(req.body.length);
//   if (req.body.length) {
    const users = req.body
//     for ( user of users ) {
//         const newUser = new User(req.body);
//         const result = await newUser.save();
//         console.log(result);
//     } 
//     return return res.send('All Good.');
//   }
//   const newUser = new User(req.body);
  // save : Updates an existing document or inserts a new document,
  // depending on its document parameter.
  const result = await User.insertMany(users);
  return res.json(result);
});
server.post("/add/book", async (req, res, next) => {
//   const newBook = new Book(req.body);
  const result = await Book.insertMany(req.body);
  return res.json(result);
});

// READ
server.get("/books", async (req, res, next) => {
  const books = await User.find();
  return res.json(books);
});
server.get("/user/:id", async (req, res, next) => {
  if (validId(req.params.id)) {
    const user = await User.findById(req.params.id);
    return res.json(user);
  }
  return res.send("User not found.");
});
server.get("/book/:id", async (req, res, next) => {
  if (validId(req.params.id)) {
    const book = await Book.findById(req.params.id);
    return res.json(book);
  }
  return res.send("Book not found.");
});

// UPDATE
server.put("/user/:id", async (req, res, next) => {
  if (validId(req.params.id)) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(user);
  }
  return res.send("User not found.");
});
server.put("/book/:id", async (req, res, next) => {
  if (validId(req.params.id)) {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(book);
  }
  return res.send("Book not found.");
});

// DELETE
server.delete("/book/:id", async (req, res, next) => {
  if (validId(req.params.id)) {
    const book = await Book.deleteOne({ _id: req.params.id });
    return res.json(book);
  }
  return res.send("Book not found.");
});
server.delete("/user/:id", async (req, res, next) => {
  if (validId(req.params.id)) {
    const user = await User.deleteOne({ _id: req.params.id });
    return res.json(user);
  }
  return res.send("User not found.");
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
