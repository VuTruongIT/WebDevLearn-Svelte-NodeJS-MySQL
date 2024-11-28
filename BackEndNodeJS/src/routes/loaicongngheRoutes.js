import express from 'express';
import { 
    getLoaiCongNghe, 
    searchAndPaginateLoaiCongNghe, 
    getByIdLoaiCongNghe,
    getByIdAndTenLoaiCongNghe,
    addLoaiCongNghe,
    updateLoaiCongNghe,
    deleteByIdLoaiCongNghe,
    deleteLoaiCongNghe
} from '../controllers/loaicongngheController.js';
import { verifyToken, verifyPermission } from '../middlewares/auth.js';


const router = express.Router();

// Định nghĩa route để lấy dữ liệu từ 'loaicongnghe'
router.get('/loaicongnghe',verifyToken,verifyPermission('QuanLyLoaiCongNghe'), getLoaiCongNghe); // Cần token hợp lệ
router.get('/loaicongnghe/search', searchAndPaginateLoaiCongNghe); // Cần token hợp lệ
router.get('/loaicongnghe/get-by-id/:id', getByIdLoaiCongNghe); // Cần token hợp lệ
router.get('/loaicongnghe/get-by-id-and-ten', getByIdAndTenLoaiCongNghe); // Cần token hợp lệ

// Định nghĩa route thêm mới, cập nhật, và xóa (cần quyền "QuanLyLoaiCongNghe")
router.post('/loaicongnghe/add',verifyToken,verifyPermission('QuanLyLoaiCongNghe'), addLoaiCongNghe);
router.put('/loaicongnghe/update/:id', updateLoaiCongNghe);
router.delete('/loaicongnghe/delete/:id', deleteByIdLoaiCongNghe);
router.delete('/loaicongnghe/delete', deleteLoaiCongNghe);


export default router;
