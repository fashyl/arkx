/* eslint-disable react/prop-types */
import { useNavigate, useParams } from 'react-router-dom'; // To access book ID

function BookDetail({ books }) {
  const navigate = useNavigate();
  const { bookId } = useParams(); // Get book ID from URL parameter
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return <p>Book not found!</p>; // Handle case where book doesn't exist
  }

  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <button onClick={() => navigate(`/`)}>Home</button>
    </div>
  );
}

export default BookDetail;
