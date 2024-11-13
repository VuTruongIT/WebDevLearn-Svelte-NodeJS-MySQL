// Controller để xử lý logic cho API

import db from '../config/db.js';

export const getLoaiCongNghe = (req, res) => {
  const sql = 'SELECT * FROM loaicongnghe';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Lỗi khi truy vấn MySQL:', err);
      res.status(500).json({ error: 'Lỗi khi lấy dữ liệu từ cơ sở dữ liệu' });
      return;
    }
    res.json(result); // Trả về kết quả dưới dạng JSON
  });
};
