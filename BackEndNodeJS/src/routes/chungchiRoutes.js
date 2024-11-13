import express from 'express';
import { getChungChi } from '../controllers/chungchiController.js';

const router = express.Router();

router.get('/chungchi', getChungChi);

export default router;
