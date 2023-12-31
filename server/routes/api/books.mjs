import express from 'express';
// Load Book model
import Book from '../../models/Book.mjs';

const router = express.Router();

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/all', (req, res) => {
    console.log(5)
    Book.find()
        .then((books) => res.json(books))
        .catch((err) => res.status(404).json({ nobooksfound: 'No Books found' }));
        console.log(6)
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then((book) => res.json(book))
        .catch((err) => res.status(404).json({ nobookfound: 'No Book found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/add', (req, res) => {
    console.log(3)
    Book.create(req.body)
        .then((book) => res.json({ msg: 'Book added successfully' }))
        .catch((err) => res.status(400).json({ error: 'Unable to add this book' }));
    console.log(4)
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then((book) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then((book) => res.json({ mgs: 'Book entry deleted successfully' }))
        .catch((err) => res.status(404).json({ error: 'No such a book' }));
});

export default router;