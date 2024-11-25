import { Types } from 'mongoose';
import CarModel from '../cars/car.model';
import { TOrder } from './order.interface';
import OrderModel from './order.model';

const checkCarStock = async (id: string) => {
  const car = await CarModel.findById(new Types.ObjectId(id));
  return car?.inStock;
};

const checkCarQuantity = async (id: string) => {
  const car = await CarModel.findById(new Types.ObjectId(id));
  return car?.quantity;
};

const reduceCarQuantity = async (id: string, count: number) => {
  let car = await CarModel.findByIdAndUpdate(
    new Types.ObjectId(id),
    { $inc: { quantity: -count } },
    { new: true },
  );

  if (car && car?.quantity < 1) {
    car = await CarModel.findByIdAndUpdate(
      new Types.ObjectId(id),
      { inStock: false },
      { new: true },
    );
  }
  return car;
};

const createOrderIntoDB = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

export default {
  checkCarStock,
  createOrderIntoDB,
  checkCarQuantity,
  reduceCarQuantity,
};
