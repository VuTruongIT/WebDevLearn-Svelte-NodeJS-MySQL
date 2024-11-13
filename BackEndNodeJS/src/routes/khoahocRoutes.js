import express from 'express';
import { getKhoaHoc } from '../controllers/khoahocController.js';

const router = express.Router();

router.get('/khoahoc', getKhoaHoc);

export default router;
