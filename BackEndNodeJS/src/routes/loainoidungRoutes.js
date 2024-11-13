// Định nghĩa các route của API

import express from 'express';
import { getLoaiNoiDung } from '../controllers/loainoidungController.js';

const router = express.Router();

// Định nghĩa route để lấy dữ liệu từ 'congnghe'
router.get('/loainoidung', getLoaiNoiDung);

export default router;