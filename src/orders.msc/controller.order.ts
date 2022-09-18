import { Request, Response } from 'express';
import ordersService from './service.order';

const ordersController = {
  getAll: async (_req: Request, res: Response) => {
    const result = await ordersService.getAll();
    return res.status(200).json(result);
  },

  create: async (req: Request, res: Response) => {
    const { productsIds } = req.body;
    const { user } = req.body;
    const result = await ordersService.create(user.username, productsIds);
    return res.status(201).json(result);
  },
};

export default ordersController;