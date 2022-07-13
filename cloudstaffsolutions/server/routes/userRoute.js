import express from 'express';
import { createUser,findOneUser,getAllUsers,updateUser } from  '../controller/usersControllser.js';

const router = express.Router();

router.route('/user').get(getAllUsers);
router.route('/login').post(findOneUser);
router.route('/user/new').post(createUser);
router.route('/user/:id').put(updateUser);


export default router;