import { Router } from 'express';
import {DriverController} from '../controllers/driverController';

const router = Router();
const driverController = new DriverController();

// Route to get assigned rides for a driver
router.get('/rides', driverController.getAssignedRides);

// Route to update ride status
router.put('/rides/:id/status', driverController.updateRideStatus);

export default router;