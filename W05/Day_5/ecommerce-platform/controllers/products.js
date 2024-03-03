//
//   Basic CRUD operations for products.
//

const { Product } = require("../models/schemas/product");
const { codes, messages } = require("../config/http");

// Get all products.
exports.readProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(codes.OK).json(products);
  } catch (error) {
    console.error("Error fetching products: ", error);
    res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
  }
};

// Get a specific product by ID.
exports.readProductById = async (req, res, next) => {
  try {
    const product = await Product.find({ _id: req.params.id });
    if (!product) {
      res.status(codes.NOT_FOUND).send(messages[404]);
      return;
    }
    res.status(codes.OK).json(product);
  } catch (error) {
    console.error("Error fetching product: ", error);
    res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
  }
};

// Create a new or many new products.
exports.createProducts = async (req, res, next) => {
  try {
    // In case of bulkwrite.
    if (Array.isArray(req.body)) {
      const newProducts = await Product.insertMany(req.body);
      res.status(codes.CREATED).json(newProducts);
    } else {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(codes.CREATED).json(newProduct);
    }
  } catch (error) {
    console.error("Error creating product: ", error);
    if (error.name === "ValidationError") {
      res
        .status(codes.BAD_REQUEST)
        .send("Invalid product data. Please provide all required fields.");
    } else {
      res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
    }
  }
};

// Update a product.
exports.updateProduct = async (req, res, next) => {
  try {
    // findOneAndUpdate(filter, update, options): Promise<ModifyResult<TSchema>>
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    if (!product) {
      res.status(codes.NOT_FOUND).send(messages[404]);
      return;
    }
    res.status(codes.OK).json(product);
  } catch (error) {
    console.log("Error updating product:", error);
    if (error.name === "ValidationError" || "CastError") {
      res
        .status(codes.BAD_REQUEST)
        .send("Invalid product data. Please provide all required fields.");
    } else {
      res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
    }
  }
};

// Delete a product.
exports.deleteProduct = async (req, res, next) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
      res.status(codes.NOT_FOUND).send(messages[404]);
      return;
    }
    res.status(codes.OK).json({
      message: "Product deleted successfully.",
      deleted,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(codes.INTERNAL_SERVER_ERROR).send(message[500]);
  }
};
// 100 nice.