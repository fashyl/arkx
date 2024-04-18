import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook";
import NotFound from "./components/NotFound";
import BookDetail from "./components/BookDetail";
import EditBook from "./components/EditBook";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]); // State to store all books

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  const handleUpdateBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<AddBook onAddBook={handleAddBook} />} />
        <Route
          path="/"
          element={
            <BookList
              books={books}
              onDelete={handleDeleteBook}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={<EditBook books={books} onUpdateBook={handleUpdateBook} />}
        />
        <Route path="/books/:bookId" element={<BookDetail books={books} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
