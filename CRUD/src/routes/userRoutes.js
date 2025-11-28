import express from 'express';
import { home, createUser, getUsers, deleteUser, editUser } from '../controllers/userController.js'

const router = express.Router();

router.get('/', home)
router.post('/createUser', createUser)
router.get('/getUsers', getUsers)
router.delete('/deleteUser/:id', deleteUser)
router.patch('/editUser/:id', editUser)
export default router