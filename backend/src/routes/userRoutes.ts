import { Router } from 'express';
import { UserController } from '../controllers/userController';

const router = Router();
const userController = new UserController();

router.post('/signup', userController.signUp);
router.post('/book-ride', userController.bookRide);

export default router;