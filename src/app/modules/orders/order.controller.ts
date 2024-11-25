import { Request, Response } from 'express';
import orderService from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderBody = req.body;
    // Checking Car Stock
    const stock = await orderService.checkCarStock(orderBody.car);
    if (!stock) {
      res.json({
        message: 'Car is out of stock',
        success: false,
        data: {},
      });
      return;
    }
    // Checking Car quantity
    const quantity = await orderService.checkCarQuantity(orderBody.car);
    if (quantity && quantity < Number(orderBody.quantity)) {
      res.json({
        message: `Sorry, the requested quantity is not available. Only ${quantity} units are in stock.`,
        success: false,
        quantity,
        data: {},
      });
      return;
    }

    // Reducing the quantity
    await orderService.reduceCarQuantity(
      orderBody.car,
      Number(orderBody.quantity),
    );

    const result = await orderService.createOrderIntoDB(orderBody);
    res.json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Some thing went wrong',
      success: false,
      error,
    });
  }
};

export default {
  createOrder,
};
