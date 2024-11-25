import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { CarRouter } from './app/modules/cars/car.router';
import { OrderRouter } from './app/modules/orders/order.router';
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Application routes
app.use('/api/cars', CarRouter);
app.use('/api/orders', OrderRouter);

// Handling not found page
app.get('*', (req: Request, res: Response) => {
  res
    .status(404)
    .json({ message: 'Route not found', success: false, data: null });

  return;
});

// Handling Errors
app.all('*', (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    res.status(500).json({
      message: 'Something went  wrong',
      success: false,
      error: err,
    });
  }
  next();
});

export default app;
