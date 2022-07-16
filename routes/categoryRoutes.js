import express from 'express';

import addCategory from '../controller/category/addCategory'
import getAllCategories from '../controller/category/getAllCategories'

const categoryRoutes = express.Router();

categoryRoutes.post('/', addCategory);
categoryRoutes.get('/', getAllCategories);


export default categoryRoutes;