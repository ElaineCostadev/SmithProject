import jwt, { JwtPayload } from 'jsonwebtoken';
import CustomError from '../errors/CustomError';

const jwtSecret = 'senhaSuperSecreta';

const jwtCode = {
  generateToken: (payload: JwtPayload): string => {
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '10d', algorithm: 'HS256' });
    return token;
  },

  validateToken: (token: string): JwtPayload | string => {
    const decode = jwt.verify(token, jwtSecret);
    if (!token) throw new CustomError(401, 'Token not found');
    
    return decode;
  },
};

export default jwtCode;
