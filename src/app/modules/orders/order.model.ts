import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const OrderSchema = new Schema<TOrder>({
  email: { type: String, required: [true, 'Email is required'] },
  car: {
    type: Schema.Types.ObjectId,
    ref: 'car',
    required: [true, 'Car ID is required.'],
  },
  quantity: { type: Number, required: [true, 'Quantity is required'] },
  totalPrice: { type: Number, required: [true, 'Total Price is required'] },
});

const OrderModel = model<TOrder>('order', OrderSchema);

export default OrderModel;
