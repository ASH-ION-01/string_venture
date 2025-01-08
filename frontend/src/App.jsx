// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar.jsx';
// import Dashboard from './components/Dashboard.jsx';
// import BookList from './components/BookList.jsx';
// import AddBook from './components/AddBook.jsx';
// import Login from './pages/Login.jsx';
// import Register from './pages/Register.jsx';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/books" element={<BookList />} />
//         <Route path="/add-book" element={<AddBook />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import BookList from './components/BookList.jsx';
import AddBook from './components/AddBook.jsx';
import BorrowBook from './components/BorrowBook.jsx';  // Add BorrowBook component
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/borrow-book" element={<BorrowBook />} />  {/* Add route for BorrowBook */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
