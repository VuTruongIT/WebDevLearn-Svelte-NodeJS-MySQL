// File chính để khởi động server

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import congngheRoutes from './src/routes/congngheRoutes.js';
import loaicongngheRoutes from './src/routes/loaicongngheRoutes.js';
import congnghetagsRoutes from './src/routes/congnghetagsRoutes.js';
import tagsRoutes from './src/routes/tagsRoutes.js';
import loainoidungRoutes from './src/routes/loainoidungRoutes.js';
import noidungcongngheRoutes from './src/routes/noidungcongngheRoutes.js';
import vaitroRoutes from './src/routes/vaitroRoutes.js';
import quyenRoutes from './src/routes/quyenRoutes.js';
import vaitroquyenRoutes from './src/routes/vaitroquyenRoutes.js';
import nguoidungRoutes from './src/routes/nguoidungRoutes.js';
import khoahocRoutes from './src/routes/khoahocRoutes.js';
import baihocRoutes from './src/routes/baihocRoutes.js';
import cauhoiRoutes from './src/routes/cauhoiRoutes.js';
import luachonRoutes from './src/routes/luachonRoutes.js';
import chungchiRoutes from './src/routes/chungchiRoutes.js';
import ketquathiRoutes from './src/routes/ketquathiRoutes.js';
import danhgiakhoahocRoutes from './src/routes/danhgiakhoahocRoutes.js';
import khoahocgiangvienRoutes from './src/routes/khoahocgiangvienRoutes.js';




dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Cấu hình middleware
app.use(cors({
  origin: 'http://localhost:5173', // Chỉ cho phép frontend tại địa chỉ này
}));
app.use(express.json());

// Sử dụng route
app.use('/api', congngheRoutes);
app.use('/api', loaicongngheRoutes);
app.use('/api', congnghetagsRoutes);
app.use('/api', tagsRoutes);
app.use('/api', loainoidungRoutes);
app.use('/api', noidungcongngheRoutes);
app.use('/api', vaitroRoutes);
app.use('/api', quyenRoutes);
app.use('/api', vaitroquyenRoutes);
app.use('/api', nguoidungRoutes);
app.use('/api', khoahocRoutes);
app.use('/api', baihocRoutes);
app.use('/api', cauhoiRoutes);
app.use('/api', luachonRoutes);
app.use('/api', chungchiRoutes);
app.use('/api', ketquathiRoutes);
app.use('/api', danhgiakhoahocRoutes);
app.use('/api', khoahocgiangvienRoutes);


// Route mặc định
app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

// Lắng nghe trên cổng đã chỉ định
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
