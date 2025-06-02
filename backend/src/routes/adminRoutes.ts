import { Router } from 'express';
import {AdminController} from '../controllers/adminController';

const router = Router();
const adminController = new AdminController();

router.post('/approve-ride/:id', adminController.approveRide);
router.post('/reject-ride/:id', adminController.rejectRide);
router.get('/ride-requests', adminController.getRideRequests);

export default router;