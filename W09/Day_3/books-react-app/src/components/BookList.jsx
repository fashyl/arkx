/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom'; // For navigation and linking

function BookList({ books, onDelete }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link> - {book.author}
            <button onClick={() => navigate(`/edit/${book.id}`)}>Edit</button>
            <button onClick={() => onDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/add')}>Add Book</button>
    </div>
  );
}

export default BookList;
