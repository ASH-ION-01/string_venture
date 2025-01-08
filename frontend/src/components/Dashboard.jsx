import React, { useEffect, useState } from 'react';
import API from '../utils/api';

const Dashboard = () => {
  const [stats, setStats] = useState({ totalBooks: 0, borrowedBooks: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get('/books');
        const borrowedBooks = res.data.filter((book) => !book.availabilityStatus).length;
        setStats({ totalBooks: res.data.length, borrowedBooks });
      } catch (err) {
        console.error(err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h5 className="text-lg font-semibold">Total Books</h5>
          <p className="text-3xl font-bold">{stats.totalBooks}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h5 className="text-lg font-semibold">Borrowed Books</h5>
          <p className="text-3xl font-bold">{stats.borrowedBooks}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
