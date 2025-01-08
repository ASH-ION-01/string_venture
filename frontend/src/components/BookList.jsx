import React, { useEffect, useState } from 'react';
import API from '../utils/api';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await API.get('/books');
        setBooks(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-6">Book List</h2>
      <div className="grid grid-cols-1 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="text-xl font-semibold">{book.title}</h5>
            <p>Author: {book.author}</p>
            <p>Status: {book.availabilityStatus ? 'Available' : 'Borrowed'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
