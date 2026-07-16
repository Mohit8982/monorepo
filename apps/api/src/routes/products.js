import express from 'express';
import * as ctrl from '../controllers/productsController.js';

const router = express.Router();

router.get('/', ctrl.list);
router.get('/:id', ctrl.getById);

export default router;
