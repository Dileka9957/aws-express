import { Request, Response } from 'express';
import { Book } from '../models/bookModel';

let books: Book[] = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: '1984', author: 'George Orwelll' },
  { id: 3, title: 'Test 12', author: 'Test 45' }
];

export const getBooks = (req: Request, res: Response) => {
  res.json(books);
};

export const getBookById = (req: Request, res: Response) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
};

export const createBook = (req: Request, res: Response) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required' });
  }
  
  const newBook: Book = {
    id: books.length + 1,
    title,
    author
  };
  
  books.push(newBook);
  res.status(201).json(newBook);
};