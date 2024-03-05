//
//    Handles various queries related to products,
//    including filtering, sorting, and pagination.
//

const { Product } = require("../models/schemas/product");
const { codes, messages } = require("../config/http");

// Filter products by category.
exports.filterProductsByCategory = async (req, res, next) => {
  try {
    console.log(req.query);
    const result = await Product.find({ category: req.query.category });
    if (result.length === 0 /* !result */)
      return res.status(codes.NOT_FOUND).send("Pikala."); // in JavaScript arrays are always truthy.
    res.status(codes.OK).json(result);
  } catch (error) {
    console.error("Error fetching products by category :", error);
    if (error.name === "ValidationError" || error.name === "CastError") {
      res
        .status(codes.BAD_REQUEST)
        .send("Invalid query parameters. Please provide valid values.");
    } else {
      res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
    }
  }
};

// Sort products by a field in ascending or descending order.
exports.sortProducts = async (req, res, next) => {
  try {
    const { field, orderBy } = req.query;
    console.log(field, orderBy);
    // Using square brackets around field is necessary to dynamically set the field to sort by,
    // as field is a variable representing the field name, and computed property syntax allows us
    // to use it as the actual key name in the sort object.
    const result = await Product.find().sort({
      [field]: orderBy === "asc" ? 1 : -1,
    });
    if (result.length === 0)
      return res.status(codes.NOT_FOUND).send("Y'a air.");
    res.status(codes.OK).json(result);
  } catch (error) {
    console.error("Error fetching products by category :", error);
    if (error.name === "ValidationError" || error.name === "CastError") {
      res
        .status(codes.BAD_REQUEST)
        .send("Invalid query parameters. Please provide valid values.");
    } else {
      res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
    }
  }
};

// Search products by keyword.
exports.searchProducts = async (req, res, next) => {
  try {
    const { keyword } = req.query;
    // console.log("Search keyword:", keyword);
    const pattern = new RegExp(keyword, "ig");
    // console.log("Search pattern:", pattern);
    const result = await Product.find({
      $or: [{ title: { $regex: pattern } }, { brand: { $regex: pattern } }],
    });
    // console.log("Search result:", result);
    if (result.length === 0)
      return res.status(codes.NOT_FOUND).send("Y'a air.");
    res.status(codes.OK).json(result);
  } catch (error) {
    console.error("Error fetching products by price range :", error);
    if (error.name === "ValidationError" || error.name === "CastError") {
      res
        .status(codes.BAD_REQUEST)
        .send("Invalid query parameters. Please provide valid values.");
    } else {
      res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
    }
  }
};

// Filter products by price range. Specify the minimum and maximum price to retrieve products within that range.
exports.filterProductsByPrice = async (req, res, next) => {
  try {
    const { minPrice, maxPrice } = req.query;
    const result = await Product.find({
      $and: [{ price: { $gte: minPrice } }, { price: { $lte: maxPrice } }],
    });
    if (result.length === 0)
      return res.status(codes.NOT_FOUND).send("Y'a air.");
    res.status(codes.OK).json(result);
  } catch (error) {
    console.error("Error fetching products by price range :", error);
    if (error.name === "ValidationError" || error.name === "CastError") {
      res
        .status(codes.BAD_REQUEST)
        .send("Invalid query parameters. Please provide valid values.");
    } else {
      res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
    }
  }
};

// Get paginated results using MongoDB methods skip and limit.
exports.getProductsPaginated = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const result = await Product.find({})
      .skip(page * limit) //
      .limit(limit); //
    if (result.length === 0)
      return res.status(codes.NOT_FOUND).send("Y'a air.");
    res.status(codes.OK).json(result);
  } catch (error) {
    console.error("Error fetching paginated products list :", error);
    if (error.name === "ValidationError" || error.name === "CastError") {
      res
        .status(codes.BAD_REQUEST)
        .send("Invalid query parameters. Please provide valid values.");
    } else {
      res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
    }
  }
};
// NOTE about Pagination : https://codebeyondlimits.com/articles/pagination-in-mongodb-the-only-right-way-to-implement-it-and-avoid-common-mistakes