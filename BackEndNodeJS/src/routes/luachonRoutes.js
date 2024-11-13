import express from 'express';
import { getLuaChon } from '../controllers/luachonController.js';

const router = express.Router();

router.get('/luachon', getLuaChon);

export default router;
