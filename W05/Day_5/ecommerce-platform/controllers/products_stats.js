//
//   Advanced feature endpoint for retrieving statistics about products.
//   such as total count, average price, or most popular categories.
//

const { codes, messages } = require("../config/http");
const { Product } = require("../models/schemas/product");

exports.getTotalProductCount = async (req, res) => {
  // Calculates and return the total number of products
  try {
    const count = await Product.estimatedDocumentCount();
    res.status(codes.OK).json({
      totalProductsCount: count,
    });
  } catch (error) {
    console.error("Error counting docs:", error);
    res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
  }
};

exports.getAverageProductPrice = async (req, res) => {
  // Calculates and returns the average price of products
  try {
    const result = await Product.aggregate([
      { $group: { _id: null, averagePrice: { $avg: "$price" } } },
    ]);
    res.status(codes.OK).json({
      averagePrice: Number(result[0].averagePrice.toFixed(2)),
    });
  } catch (error) {
    console.error("Error counting docs:", error);
    res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
  }
};

exports.getMostExpensiveProduct = async (req, res) => {
  // Finds and return details of the most expensive product
  try {
    const result = await Product.aggregate([
      { $sort: { price: -1 } },
      { $limit: 1 },
    ]);
    res.status(codes.OK).json({
      mostExpensiveProduct: result[0],
    });
  } catch (error) {
    console.error("Error counting docs:", error);
    res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
  }
};

exports.getCheapestProduct = async (req, res) => {
  // Finds and return details of the cheapest product
  try {
    const result = await Product.aggregate([
      { $sort: { price: 1 } },
      { $limit: 1 },
    ]);
    res.status(codes.OK).json({
      cheapestProduct: result[0],
    });
  } catch (error) {
    console.error("Error counting docs:", error);
    res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
  }
};

exports.getPriceRangePerCategory = async (req, res) => {
  // the range of prices for each category, including minimum, maximum, and average prices.
  try {
    const result = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          category: { $first: {$arrayElemAt: ["$category", 0]}, },
          minimum: { $min: "$price" },
          maximum: { $max: "$price" },
          average: { $avg: "$price" },
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
    ]);
    res.status(codes.OK).json(result);
  } catch (error) {
    console.error("Error counting docs:", error);
    res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
  }
};

exports.getProductCountByCategory = async (req, res) => {
  // Calculates and returns product count for each category
  try {
    const result = await Product.aggregate([
      {
        $group: {
          _id: {$arrayElemAt: ["$category", 0]},
          productCount: { $count: {} },
        },
      },
    ]);
    res.status(codes.OK).json(result);
  } catch (error) {
    console.error("Error counting docs:", error);
    res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
  }
};

exports.getProductStock = async (req, res) => {
  // The availabe stock of each product, grouped by category
  try {
    const result = await Product.aggregate([
        {
          $group: {
            _id: {
              category: "$category",
              product: "$title" 
            },
            totalStock: { $sum: "$stock" }
          }
        },
        {
          $group: {
            _id: {$arrayElemAt: ["$_id.category", 0]},
            products: {
              $push: {
                name: "$_id.product",
                stock: "$totalStock"
              }
            }
          }
        }
      ]);
    res.status(codes.OK).json(result);
  } catch (error) {
    console.error("Error counting docs:", error);
    res.status(codes.INTERNAL_SERVER_ERROR).send(messages[500]);
  }
};
// ... this could never end.