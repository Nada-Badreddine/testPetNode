import express from 'express';
import addPet from '../controller/pet/addPet'
import deletePet from '../controller/pet/deletePet'
import getAllPet from '../controller/pet/getAllPet'
import getPetById from '../controller/pet/getPetById'
import modifyPet from '../controller/pet/modifyPet'
import getPetByStatus from '../controller/pet/getPetByStatus'

const petRoutes = express.Router();

petRoutes.post('/', addPet);
petRoutes.get('/', getAllPet);
petRoutes.delete('/:petId', deletePet);
petRoutes.put('/:petId', modifyPet);
petRoutes.get('/:petId', getPetById);
petRoutes.get('/findByStatus/:status', getPetByStatus);

export default petRoutes;