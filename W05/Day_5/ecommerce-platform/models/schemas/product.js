const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: [200, 'Must be less than 200 characters.']
  }, // The title or name of the product.
  description: {
    type: String,
    required: true,
    trim : true,
    maxLength : 1000
  }, // A brief description of the product.
  price: {
    type: Number,
    min: 0,
    required: true,
  }, // The price of the product.
  brand : {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  category: [
    {
      type: String,
      trim : true,
      maxLength: 20,
      required: true,
    },
  ], // The category to which the product belongs.
  images: [
    {
      type: String,
      default: '', // hi blati.
      required: false,
    },
  ], // An array containing URLs of product images (maximum 4 images).
  owner: mongoose.Types.ObjectId, // The user UUID of the owner/seller of the product.
  stock: {
    type: Number,
    min: 0
  }, // The number of items available in stock.
});

const productMetadata = new Schema({
  published: Boolean, //  A boolean value indicating whether the product is published (true) or not (false). If set to false, the product will not be visible on the platform.
  createdAt: { type: Date, default: Date.now }, //The timestamp indicating when the product was added to the platform.
  updatedAt: { type: Date, default: Date.now }, // The timestamp indicating when the product was last updated.
});

productSchema.add(productMetadata); // Modularity 100

// To use our schema definition, we need to convert our blogSchema into a Model we can work with.
exports.Product = mongoose.model("products", productSchema);