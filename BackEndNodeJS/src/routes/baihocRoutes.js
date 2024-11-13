import express from 'express';
import { getBaiHoc } from '../controllers/baihocController.js';

const router = express.Router();

router.get('/baihoc', getBaiHoc);

export default router;
