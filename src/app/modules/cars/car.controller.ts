import { Request, Response } from 'express';
import { CarServices } from './car.service';

const createCar = async (req: Request, res: Response) => {
  try {
    const carBody = req.body;
    // Validate with zod

    // Send the data to service
    const result = await CarServices.createCarIntoDB(carBody);

    res.json({
      message: 'Car created successfully',
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
const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await CarServices.getAllCarsFromDB();

    res.json({
      message: 'Cars retrieved successfully',
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
  getAllCars,
};
