import express from 'express';
import { getCauHoi } from '../controllers/cauhoiController.js';

const router = express.Router();

router.get('/cauhoi', getCauHoi);

export default router;
