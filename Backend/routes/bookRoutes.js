// const express = require('express');
// const router = express.Router();
// const Book = require('../models/Book');

// // Add a new book
// router.post('/', async (req, res) => {
//   try {
//     const newBook = new Book(req.body);
//     const savedBook = await newBook.save();
//     res.status(201).json(savedBook);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get all books
// router.get('/', async (req, res) => {
//   try {
//     const books = await Book.find();
//     res.status(200).json(books);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Update book
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(updatedBook);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Delete book
// router.delete('/:id', async (req, res) => {
//   try {
//     await Book.findByIdAndDelete(req.params.id);
//     res.status(200).json('Book deleted');
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Add a new book
router.post('/', async (req, res) => {
  try {
    const { title, author, publicationYear, availabilityStatus } = req.body;

    if (!title || !author || !publicationYear || availabilityStatus === undefined) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newBook = new Book({ title, author, publicationYear, availabilityStatus });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add the book.' });
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch books.' });
  }
});

// Update book
router.put('/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found.' });
    }
    res.status(200).json(updatedBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update the book.' });
  }
});

// Delete book
router.delete('/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found.' });
    }
    res.status(200).json({ message: 'Book deleted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete the book.' });
  }
});

module.exports = router;
