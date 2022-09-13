import { Router } from 'express';
import productController from '../products.msc/controller.product';

const productRoute: Router = Router();

productRoute.get('/', productController.getAll);

export default productRoute;