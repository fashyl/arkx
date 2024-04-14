const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const connection = require("../../config/db");
const { logger } = require("../../config/winston");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Username is required",
    regex: /[A-Za-z\s]+/,
    maxLength: 16,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: String,
});

UserSchema.pre("save", async function(next) {
  try {
    const user = this
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    return next();
  } catch (error) {
    logger.log("error", error);
    return next(error);
  }
});

UserSchema.post("save", (doc, next) => {
  logger.log("info", `User saved with ID: ${doc._id}`);
  next();
});

module.exports = connection.model("User", UserSchema);
