// Định nghĩa các route của API

import express from 'express';
import { getCongNgheTags } from '../controllers/congnghetagsController.js';

const router = express.Router();

// Định nghĩa route để lấy dữ liệu từ 'congnghe'
router.get('/congnghetags', getCongNgheTags);

export default router;
