import express from 'express';
import { getKetQuaThi } from '../controllers/ketquathiController.js';

const router = express.Router();

router.get('/ketquathi', getKetQuaThi);

export default router;
