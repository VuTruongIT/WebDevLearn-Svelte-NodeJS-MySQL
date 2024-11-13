// Định nghĩa các route của API

import express from 'express';
import { getTags } from '../controllers/tagsController.js';

const router = express.Router();

// Định nghĩa route để lấy dữ liệu từ 'congnghe'
router.get('/tags', getTags);

export default router;
