# Book Management System Challenge

## Introduction
You are tasked with creating a simple book management system using Express.js, Axios, JSON-server, and EJS templating engine. This challenge will test your ability to implement CRUD (Create, Read, Update, Delete) operations on a collection of books stored in a JSON file using RESTful API endpoints.

## Requirements
- Implement a backend server using Express.js.
- Utilize JSON-server to simulate a RESTful API for managing books.
- Create an EJS template for rendering views.
- Implement CRUD endpoints for managing books.
- Ensure proper error handling and validation.
- Write clear and concise code with appropriate comments.

## Instructions
1. Clone this repository to your local machine.

    ```bash
    git clone https://github.com/your-username/book-management-challenge.git
    ```

2. Install dependencies using npm.

    ```bash
    npm install
    ```

3. Start the JSON-server to simulate the backend.

    ```bash
    npm run json-server
    ```

4. Start the Express server.

    ```bash
    npm start
    ```

5. Access the application in your browser at [http://localhost:3000](http://localhost:3000).

## Endpoints
- **GET /books**: Retrieve all books.
- **GET /books/:id**: Retrieve a specific book by ID.
- **POST /books**: Create a new book.
- **PUT /books/:id**: Update a book by ID.
- **DELETE /books/:id**: Delete a book by ID.

## JSON Data Structure
Each book object should have the following properties:
- id (unique identifier)
- title (title of the book)
- author (author of the book)
- genre (genre of the book)
- year (publication year of the book)

Example of a book object:

```json
{
  "id": 1,
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "genre": "Fiction",
  "year": 1960
}
