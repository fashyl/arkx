import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation on form submit

// eslint-disable-next-line react/prop-types
function AddBook({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
    };

    onAddBook(newBook); // Pass the new book object to the parent component (App.js)
    navigate('/'); // Redirect to the book list page after adding
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
