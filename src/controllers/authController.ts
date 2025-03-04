import { Request, Response } from 'express';
import { Author } from '../models/authorModel';


let authors: Author[] = [
  { id: 1, name: 'J.K Rowling' },
  { id: 2, name: 'George Orwell' },
  { id: 3, name: 'New author' },
];

export const getAuthors = (req: Request, res: Response) => {
  res.json(authors);
};