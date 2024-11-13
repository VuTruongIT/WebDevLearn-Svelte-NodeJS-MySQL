// Định nghĩa các route của API

import express from 'express';
import { getVaiTro } from '../controllers/vaitroController.js';

const router = express.Router();

// Định nghĩa route để lấy dữ liệu từ 'congnghe'
router.get('/vaitro', getVaiTro);

export default router;
