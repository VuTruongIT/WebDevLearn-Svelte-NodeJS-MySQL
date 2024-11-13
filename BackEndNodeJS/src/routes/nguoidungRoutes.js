import express from 'express';
import { getNguoiDung } from '../controllers/nguoidungController.js';

const router = express.Router();

router.get('/nguoidung', getNguoiDung);

export default router;
