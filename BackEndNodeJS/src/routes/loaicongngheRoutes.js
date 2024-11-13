// Định nghĩa các route của API

import express from 'express';
import { getLoaiCongNghe } from '../controllers/loaicongngheController.js';

const router = express.Router();

// Định nghĩa route để lấy dữ liệu từ 'congnghe'
router.get('/loaicongnghe', getLoaiCongNghe);

export default router;
