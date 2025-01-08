
// const express = require('express');
// const router = express.Router();
// const Book = require('../models/Book');
// const User = require('../models/User');

// // Borrow a book
// router.post('/borrow', async (req, res) => {
//   const { bookId, userId } = req.body;

//   try {
//     // Find the book by its ID
//     const book = await Book.findById(bookId);

//     if (!book) {
//       return res.status(404).json({ message: 'Book not found' });
//     }

//     // Check if the book is available for borrowing
//     if (!book.availabilityStatus) {
//       return res.status(400).json({ message: 'Book is already borrowed' });
//     }

//     // Update the book's availability status to 'borrowed'
//     book.availabilityStatus = false;
//     await book.save();

//     // You can add a record in the 'Transactions' collection here (optional)
//     // For now, we simply return success

//     res.status(200).json({ message: 'Book borrowed successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const User = require('../models/User');

// Borrow a book
router.post('/', async (req, res) => {
  const { bookId, userId } = req.body;

  try {
    // Find the book by its ID
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Check if the book is available for borrowing
    if (!book.availabilityStatus) {
      return res.status(400).json({ message: 'Book is already borrowed' });
    }

    // Update the book's availability status to 'borrowed'
    book.availabilityStatus = false;
    await book.save();

    // You can add a record in the 'Transactions' collection here (optional)
    // For now, we simply return success

    res.status(200).json({ message: 'Book borrowed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
