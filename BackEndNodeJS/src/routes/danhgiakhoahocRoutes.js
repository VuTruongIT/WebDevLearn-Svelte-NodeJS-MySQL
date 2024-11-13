import express from 'express';
import { getDanhGiaKhoaHoc } from '../controllers/danhgiakhoahocController.js';

const router = express.Router();

// Định nghĩa route để lấy dữ liệu từ 'congnghe'
router.get('/danhgiakhoahoc', getDanhGiaKhoaHoc);

export default router;
