import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/CustomError';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username) throw new CustomError(400, '"username" is required');
  if (!password) throw new CustomError(400, '"password" is required');
  
  next();
};

export default validateLogin;
