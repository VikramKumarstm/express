import express from 'express';
import { home, createUser, } from '../controllers/userController.js'

const router = express.Router();

router.get('/', home)
router.post('/createUser', createUser)
export default router