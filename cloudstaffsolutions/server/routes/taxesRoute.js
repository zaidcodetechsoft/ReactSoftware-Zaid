import express from 'express';
import { createTaxes,getAllTaxes,updateTaxes } from  '../controller/taxesController.js';

const router = express.Router();

router.route('/taxes').get(getAllTaxes);
router.route('/taxes/new').post(createTaxes);
router.route('/taxes/:id').put(updateTaxes);


export default router;