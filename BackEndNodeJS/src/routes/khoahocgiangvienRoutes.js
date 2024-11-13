import express from 'express';
import { getKhoaHocGiangVien } from '../controllers/khoahocgiangvienController.js';

const router = express.Router();

router.get('/khoahocgiangvien', getKhoaHocGiangVien);

export default router;
