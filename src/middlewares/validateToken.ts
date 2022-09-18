import { Request, Response, NextFunction } from 'express';
import jwtCode from '../JWThelpers/jwtfunctions';
import CustomError from '../errors/CustomError';
import Itoken from '../interfaces/jwt.interface';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers as unknown as Itoken;

  if (!authorization) throw new CustomError(401, 'Token not found');
  const data = jwtCode.validateToken(authorization);
  // console.log(data, 'data do validate JWT');
  
  // if (!data) throw new CustomError(401, 'Invalid token');
  const newBody = req.body;
  newBody.user = data;

  // console.log(newBody.req, 'newBody.req JWT;');
  
  next();
};

export default validateToken;
