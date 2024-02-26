const { viewBookApi } = require("../api/books");

exports.Book = {
    async findBook(id) {
        return await viewBookApi(id);
    },
    async getCover(id) {
        const book = await viewBookApi(id)
        return book.data.cover_image;
    }
} // REDUNDANT