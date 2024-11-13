// File cấu hình kết nối MySQL

import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// Tạo kết nối với MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Kết nối đến MySQL
db.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối đến MySQL:', err);
    return;
  }
  console.log('Đã kết nối đến MySQL!');
});

export default db;
