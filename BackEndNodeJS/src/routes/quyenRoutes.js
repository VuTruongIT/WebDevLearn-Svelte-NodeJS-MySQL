// Định nghĩa các route của API

import express from 'express';
import { getQuyen } from '../controllers/quyenController.js';

const router = express.Router();

// Định nghĩa route để lấy dữ liệu từ 'congnghe'
router.get('/quyen', getQuyen);

export default router;
