const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  number: {
    type: String,
    unique: [true, "Resource exists already."],
    sparse: true,
    required: true,
    trim: true,
    // match: [
    //   /* Detects most of the phone numbers all over the world */
    //   /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,
    //   "Please provide a valid phone number.",
    // ],
  },
});

module.exports = mongoose.model("Phone", phoneSchema);
