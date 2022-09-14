import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/CustomError';

const validateUsername = (username: string) => {
  if (!username) throw new CustomError(400, '"username" is required');
  if (typeof username !== 'string') throw new CustomError(422, '"username" must be a string');
  if (username.length < 3) {
    throw new CustomError(422, '"username" length must be at least 3 characters long');
  }
};

const validateClasse = (classe: string) => {
  if (!classe) throw new CustomError(400, '"classe" is required');
  if (typeof classe !== 'string') throw new CustomError(422, '"classe" must be a string');
  if (classe.length < 3) {
    throw new CustomError(422, '"classe" length must be at least 3 characters long');
  }
};

const validateLevel = (level: number) => {
  if (level < 1) {
    throw new CustomError(422, '"level" must be greater than or equal to 1');
  }
  if (!level) throw new CustomError(400, '"level" is required');
  if (typeof level !== 'number') throw new CustomError(422, '"level" must be a number');
};

const validatePassword = (password: string) => {
  if (!password) throw new CustomError(400, '"password" is required');
  if (typeof password !== 'string') throw new CustomError(422, '"password" must be a string');
  if (password.length < 8) {
    throw new CustomError(422, '"password" length must be at least 8 characters long');
  }
};

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;
  validateUsername(username);
  validateClasse(classe);
  validateLevel(level);
  validatePassword(password);

  next();
};

export default validateUser;
