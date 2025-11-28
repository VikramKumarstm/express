import express from 'express';
import { home, createUser, getUsers, } from '../controllers/userController.js'

const router = express.Router();

router.get('/', home)
router.post('/createUser', createUser)
router.get('/getUsers', getUsers)
export default router