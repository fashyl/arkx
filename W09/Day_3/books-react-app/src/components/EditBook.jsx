/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditBook({ books, onUpdateBook }) {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); // Get book ID from URL parameter

  useEffect(() => {
    const bookToEdit = books.find((book) => book.id === id);
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
    }
  }, [books, id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      id,
      title,
      author,
    };

    onUpdateBook(updatedBook); 
    navigate('/'); 
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
