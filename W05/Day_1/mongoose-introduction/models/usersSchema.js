const mongoose = require("mongoose");
const User = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/, // nice
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  birthdate: {
    "type": Date,
    "required": true
  },
  country: {
    "type": String,
    "required": true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('users', User) // NICE.