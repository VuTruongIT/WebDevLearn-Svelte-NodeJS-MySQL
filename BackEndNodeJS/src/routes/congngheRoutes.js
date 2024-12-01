import express from 'express';
import { 
    searchAndPaginateCongNghe,
    getByIdCongNghe,
    addCongNghe,
    updateCongNghe,
    deleteByIdCongNghe,
    deleteCongNghe
} from '../controllers/congngheController.js';

const router = express.Router();

router.get('/congnghe/search', searchAndPaginateCongNghe); 
router.get('/congnghe/get-by-id/:id', getByIdCongNghe);
router.post('/congnghe/add', addCongNghe);
router.put('/congnghe/update/:id', updateCongNghe);
router.delete('/congnghe/delete/:id', deleteByIdCongNghe);
router.delete('/congnghe/delete', deleteCongNghe);


export default router;
