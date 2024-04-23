const { MongooseError } = require("mongoose");

  // Error handler.
  class NotFoundError extends Error {
    constructor(message) {
      super(message);
      this.name = "NotFoundError";
    }
  }
  
function errorHandler(err, res) {
    if (err instanceof MongooseError) {
      if (err.name === "CastError") {
        return res.status(400).json({ message: "Invalid ID" });
      } else if (err.name === "ValidationError") {
        const errors = Object.values(err.errors).map((err) => err.message);
        return res.status(400).json({ message: "Validation error(s)", errors });
      } else {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
      }
    } else if (err.name === "MongoServerError" && err.code === 11000) {
      return res.status(400).json({ message: "E11000: Resource already exists" });
    } else {
      if (err.name === "NotFoundError") {
        return res.status(404).json({ message: err.message });
      } else {
        console.error(err);
        return res.status(500).json({ message: "Internal server error!" });
      }
    }
  }

module.exports = {
  errorHandler,
  NotFoundError,
};
