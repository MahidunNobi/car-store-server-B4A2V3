import { Router } from 'express';
import { CarController } from './car.controller';

const router = Router();

router.post('/', CarController.createCar);

export const CarRouter = router;
