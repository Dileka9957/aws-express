import express from 'express';
import {getAuthors } from '../controllers/authController';
;

const router = express.Router();

router.get('/', getAuthors);
// router.get('/:id', getBookById);
// router.post('/', createBook);

export default router;