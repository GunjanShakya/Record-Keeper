import express from 'express'
// import { getEUser } from '../../client/src/service/api.js';

import { addUser,getUsers, getEUser, editUser, deleteUser } from '../controller/user-controller.js';
const router=express.Router();

router.post('/add',addUser);
router.get('/all',getUsers)
router.get('/:id', getEUser)
router.post('/:id', editUser)
router.delete('/:id',deleteUser);

export default router