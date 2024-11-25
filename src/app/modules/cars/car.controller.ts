import { Request, Response } from 'express';
import { CarServices } from './car.service';

const createCar = async (req: Request, res: Response) => {
  try {
    const carBody = req.body;
    console.log('Running controller');

    // Validate with zod

    // Send the data to service
    const result = await CarServices.createCarIntoDB(carBody);

    res.json({
      message: 'Some thing went wrong',
      success: true,
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      message: 'Some thing went wrong',
      success: false,
      error,
    });
  }
};

export const CarController = {
  createCar,
};
