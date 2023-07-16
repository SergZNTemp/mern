import express, { json } from 'express';
import connectDB from './config/db.mjs';

import cors from 'cors';
const app = express();
const port = process.env.PORT || 8082;
import books from'./routes/api/books.mjs';

// Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(json({ extended: false }));
app.use('/api/books', books);
app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => console.log(`Server running on port ${port}`));