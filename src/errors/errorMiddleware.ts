import { Request, Response, NextFunction } from 'express';
import CustomError from './CustomError';

const errorMiddleware = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { status, message } = err as CustomError;
  res.status(status || 500).json({ message });
  next(err);
};

export default errorMiddleware;
