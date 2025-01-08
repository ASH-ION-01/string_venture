

import React, { useState, useEffect } from 'react';
import API from '../utils/api'; // Update this path if necessary

const BorrowBook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [message, setMessage] = useState('');

  // Fetch books from the API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await API.get('/books'); // Endpoint to fetch books
        setBooks(response.data); // Set the books state
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

//   const handleBorrow = async () => {
//     if (!selectedBook) {
//       setMessage('Please select a book to borrow.');
//       return;
//     }

//     try {
//       const userId = 'USER_ID'; // Replace with actual user ID, can be fetched from localStorage or context
//       const response = await API.post('/borrow', { bookId: selectedBook, userId });

//       if (response.status === 200) {
//         setMessage('Book borrowed successfully!');
//       } else {
//         setMessage('Failed to borrow the book.');
//       }
//     } catch (error) {
//       console.error('Error borrowing the book:', error);
//       setMessage('An error occurred while borrowing the book.');
//     }
//   };

const handleBorrow = async () => {
    if (!selectedBook) {
      setMessage('Please select a book to borrow.');
      return;
    }
  
    try {
      const userId = 'USER_ID'; // Replace with actual user ID
      const response = await API.post('/borrow', { bookId: selectedBook, userId }); // Ensure this is correct
  
      if (response.status === 200) {
        setMessage('Book borrowed successfully!');
      } else {
        setMessage('Failed to borrow the book.');
      }
    } catch (error) {
      console.error('Error borrowing the book:', error);
      setMessage('An error occurred while borrowing the book.');
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Borrow a Book</h2>
        
        {/* Display message */}
        {message && <p className="text-center mb-4 text-red-500">{message}</p>}
        
        <div className="mb-4">
          <label className="block text-gray-700">Select a Book</label>
          <select
            className="w-full px-4 py-2 border rounded-lg"
            value={selectedBook}
            onChange={(e) => setSelectedBook(e.target.value)}
          >
            <option value="">-- Select a Book --</option>
            {books.map((book) => (
              <option key={book._id} value={book._id}>
                {book.title} by {book.author}
              </option>
            ))}
          </select>
        </div>
        
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
          onClick={handleBorrow}
        >
          Borrow Book
        </button>
      </div>
    </div>
  );
};

export default BorrowBook;
