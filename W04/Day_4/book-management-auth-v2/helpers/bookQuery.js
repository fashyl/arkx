const { viewBookApi } = require("../api/books");

exports.Book = {
    async findBook(id) {
        return await viewBookApi(id);
    },
} // REDUNDANT