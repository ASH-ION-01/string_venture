// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-blue-500 text-white p-4">
//       <div className="container mx-auto flex justify-between">
//         <Link className="text-xl font-bold" to="/">Library</Link>
//         <div>
//           {localStorage.getItem('token') ? (
//             <>
//               <Link className="px-4 py-2 hover:bg-blue-700 rounded" to="/add-book">Add Book</Link>
//               <button
//                 className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded ml-4"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link className="px-4 py-2 hover:bg-blue-700 rounded" to="/login">Login</Link>
//               <Link className="px-4 py-2 hover:bg-blue-700 rounded ml-4" to="/register">Register</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');  // Clear token from localStorage
    navigate('/login');  // Redirect to login page
  };

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-xl font-bold" to="/">Library</Link>
        <div className="flex items-center">
          {localStorage.getItem('token') ? (
            <>
              <Link className="px-4 py-2 hover:bg-blue-700 rounded" to="/add-book">Add Book</Link>
              <Link className="px-4 py-2 hover:bg-blue-700 rounded ml-4" to="/borrow-book">Borrow Book</Link> {/* Borrow Book link */}
              <button
                className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded ml-4"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="px-4 py-2 hover:bg-blue-700 rounded" to="/login">Login</Link>
              <Link className="px-4 py-2 hover:bg-blue-700 rounded ml-4" to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
