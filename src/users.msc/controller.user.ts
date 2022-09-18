import { Request, Response } from 'express';
import usersService from './service.user';

const usersController = {
  create: async (req: Request, res: Response) => {
    const result = await usersService.create(req.body);
    return res.status(201).json({ token: result });
  },
};

export default usersController;
