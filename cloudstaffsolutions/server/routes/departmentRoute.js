import express from 'express';
import { getAllDepartments,createDepartment, updateDepartment } from '../controller/departmentController.js';

const router = express.Router();

router.route('/department').get(getAllDepartments);
router.route('/department/new').post(createDepartment);
router.route('/department/:id').put(updateDepartment);


export default router;