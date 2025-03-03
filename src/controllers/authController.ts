import { Request, Response } from 'express';
import { Author } from '../models/authorModel';


let authors: Author[] = [
  { id: 1, name: 'J.K Rowling' },
  { id: 2, name: 'George Orwelll' }
];

export const getAuthors = (req: Request, res: Response) => {
  res.json(authors);
};