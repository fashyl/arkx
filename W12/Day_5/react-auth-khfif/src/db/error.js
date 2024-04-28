import { logger } from "./config.js";

export function handleError(error, response) {
  logger.log("error", 'Error caught by handler: ', error);

  if (!Array.isArray(error)) {
    switch (error.name) {
      case 'CastError':
        return response.status(400).json({
          type: 'CastError',
          message: 'Invalid data format.',
        });

      case 'NotFoundError':
        return response.status(400).json({
          type: 'Bad',
          message: error.message,
        });

      case 'ValidationError':
        return response.status(400).json({
          type: 'ValidationError',
          message: 'Validation failed :/',
        });

      case 'MongoBulkWriteError':
        if (error.code === 11000) {
          return response.status(400).json({
            type: 'DuplicateKeyError',
            message: 'User already exists.',

          });
        }
        // Handle other MongoWriteError cases (e.g., validation errors on the server)
        return response.status(400).json({
          type: 'MongoWriteError',
          message: 'Write operation failed.',
        });

      case 'MongoError':
        if (error.code === 11000) {
          return response.status(400).json({
            type: 'DuplicateKeyError',
            message: 'User already exists.',
          });
        }
        // Handle other MongoWriteError cases (e.g., validation errors on the server)
        return response.status(400).json({
          type: 'MongoWriteError',
          message: 'Write operation failed.',
        });

      case 'MongoServerSelectionError':
        return response.status(503).json({
          type: 'DatabaseError',
          message: 'Service Unavailable: Database error occurred.',
        });

      case 'TypeError':
        return response.status(500).json({
          type: 'TypeError',
          message: 'Internal Server Error',
        });

      default:
        // Handle unexpected errors
        if (error.code === 11000) {
          return response.status(400).json({
            type: 'DuplicateKeyError',
            message: 'Duplicate key error: This field must be unique.',

          });
        }

        return response.status(500).json({
          type: 'UnknownError',
          message: 'An unknown error occurred.',
          error,
        });
    }
  }

  const errors = error.details.map((detail) => ({
    field: detail.path.join('.'),
    message: detail.message,
  }));

  return response.status(400).json({
    type: 'ValidationError',
    errors,
  });
}
