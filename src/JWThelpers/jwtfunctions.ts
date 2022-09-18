import jwt, { JwtPayload } from 'jsonwebtoken';
import CustomError from '../errors/CustomError';

const jwtSecret = 'senhaSuperSecreta';

const jwtCode = {
  generateToken: (payload: JwtPayload): string => {
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '10d', algorithm: 'HS256' });
    return token;
  },

  validateToken: (token: string): JwtPayload | string | unknown => {
    try {
      const verify = jwt.verify(token, jwtSecret);
      return verify;
    } catch (error) {
      if (error) throw new CustomError(401, 'Invalid token');
    }
  },
};

export default jwtCode;

/*
preciso de catch para capturar este erro que o proprio JWT lança

validateToken: (token: string): JwtPayload | string => {
  const decode = jwt.verify(token, jwtSecret);
  if (decode) throw new CustomError(401, 'Token not found');
  
  return decode;
},

*/