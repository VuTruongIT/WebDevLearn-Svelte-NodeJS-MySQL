// Định nghĩa các route của API

import express from 'express';
import { getNoiDungCongNghe } from '../controllers/noidungcongngheController.js';

const router = express.Router();

// Định nghĩa route để lấy dữ liệu từ 'congnghe'
router.get('/noidungcongnghe', getNoiDungCongNghe);

export default router;
