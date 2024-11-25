import { TCar } from './car.interface';
import CarModel from './car.model';

const createCarIntoDB = async (car: TCar) => {
  const result = await CarModel.create(car);
  return result;
};
const getAllCarsFromDB = async () => {
  const result = await CarModel.find();
  return result;
};

export const CarServices = {
  createCarIntoDB,
  getAllCarsFromDB,
};
