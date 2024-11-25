import { Router } from 'express';
import { CarController } from './car.controller';

const router = Router();

router.post('/', CarController.createCar);
router.get('/', CarController.getAllCars);
router.get('/:carId', CarController.getSingleCar);
router.put('/:carId', CarController.updateCar);

export const CarRouter = router;
