import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/CustomError';

const validateOrders = (req: Request, _res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (!productsIds) throw new CustomError(400, '"productsIds" is required');

  if (productsIds.length === 0) {
    throw new CustomError(422, '"productsIds" must include only numbers');
  }

  if (!Array.isArray(productsIds)) {
    throw new CustomError(422, '"productsIds" must be an array');
  } 
  next();
};

export default validateOrders;