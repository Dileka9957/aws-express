import express from 'express';
import {getAuthors } from '../controllers/authController';
;

const router = express.Router();

router.get('/', getAuthors);

export default router;