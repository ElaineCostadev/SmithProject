import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/CustomError';

const validateName = (name: string) => {
  if (!name) throw new CustomError(400, '"name" is required');

  if (name.length < 3) {
    throw new CustomError(422, '"name" length must be at least 3 characters long');
  }

  if (typeof name !== 'string') {
    throw new CustomError(422, '"name" must be a string');
  }
};

const validateAmount = (amount: string) => {
  if (!amount) throw new CustomError(400, '"amount" is required');

  if (amount.length < 3) {
    throw new CustomError(422, '"amount" length must be at least 3 characters long');
  }

  if (typeof amount !== 'string') {
    throw new CustomError(422, '"amount" must be a string');
  } 
};

const validateProduct = (req: Request, _res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  validateName(name);
  validateAmount(amount);

  next();
};

export default validateProduct;
