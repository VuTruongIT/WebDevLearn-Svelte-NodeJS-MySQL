// Định nghĩa các route của API

import express from 'express';
import { getCongNghe } from '../controllers/congngheController.js';

const router = express.Router();

// Định nghĩa route để lấy dữ liệu từ 'congnghe'
router.get('/congnghe', getCongNghe);

export default router;
