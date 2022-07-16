import express from 'express';

import addTag from '../controller/tag/addTag'

const tagRoutes = express.Router();

tagRoutes.post('/', addTag);


export default tagRoutes;