import { Request, Response } from 'express';
import productService from './service.product';

const productController = {
  getAll: async (_req: Request, res: Response) => {
    const result = await productService.getAll();
    res.status(200).json(result);
  },
  create: async (req: Request, res: Response) => {
    const result = await productService.create(req.body);
    return res.status(201).json(result);
  },
};

export default productController;
