import express from 'express';
import { createEmployee,getAllEmployees,updateEmployee } from  '../controller/employeeController.js';

const router = express.Router();

router.route('/employee').get(getAllEmployees);
router.route('/employee/new').post(createEmployee);
router.route('/employee/:id').put(updateEmployee);


export default router;