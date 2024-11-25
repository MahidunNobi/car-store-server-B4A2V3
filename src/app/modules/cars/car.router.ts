import { Router } from 'express';
import { CarController } from './car.controller';

const router = Router();

router.post('/', CarController.createCar);
router.get('/', CarController.getAllCars);

export const CarRouter = router;
