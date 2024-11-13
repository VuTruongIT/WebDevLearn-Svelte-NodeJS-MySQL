// Định nghĩa các route của API

import express from 'express';
import { getVaiTroQuyen } from '../controllers/vaitroquyenController.js';

const router = express.Router();

// Định nghĩa route để lấy dữ liệu từ 'congnghe'
router.get('/vaitroquyen', getVaiTroQuyen);

export default router;
