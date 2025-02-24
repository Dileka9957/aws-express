import express from 'express';
import { createBook, getBookById, getBooks } from '../controllers/bookController';
;

const router = express.Router();

router.get('/', getBooks);
// router.get('/:id', getBookById);
// router.post('/', createBook);

export default router;