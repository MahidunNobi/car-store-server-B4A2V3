import { model, Schema } from 'mongoose';
import { TCar } from './car.interface';

const CarSchema = new Schema<TCar>({
  brand: { type: String, required: [true, 'Brand name is  required'] },
  model: { type: String, required: [true, 'Car Model is  required'] },
  year: { type: Number, required: [true, 'Car published year is  required'] },
  price: { type: Number, required: [true, 'Car Price is  required'] },
  category: {
    type: String,
    required: [true, 'Car Category is  required'],
    enum: {
      values: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
      message:
        'Category cannot be no other than Sedan, SUV, Truck, Coupe and Convertible',
    },
  },
  description: {
    type: String,
    required: [true, 'Car Description is  required'],
  },
  quantity: { type: Number, required: [true, 'Car quantity is  required'] },
  inStock: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const CarModel = model<TCar>('car', CarSchema);

export default CarModel;
