// import React, { useState } from 'react';
// import API from '../utils/api';

// const AddBook = () => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post('/books', { title, author, availabilityStatus: true });
//       alert('Book added successfully!');
//       setTitle('');
//       setAuthor('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Add Book</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Title</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border rounded-lg"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Author</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border rounded-lg"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//               required
//             />
//           </div>
//           <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700">
//             Add Book
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddBook;

import React, { useState } from 'react';
import API from '../utils/api';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationYear, setPublicationYear] = useState(''); // Add state for publication year

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure all fields, including publicationYear, are passed to the backend
      await API.post('/books', {
        title,
        author,
        publicationYear, // Send the publication year
        availabilityStatus: true,
      });
      alert('Book added successfully!');
      setTitle('');
      setAuthor('');
      setPublicationYear(''); // Reset publication year
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Add Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Author</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Publication Year</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg"
              value={publicationYear}
              onChange={(e) => setPublicationYear(e.target.value)}
              required
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
