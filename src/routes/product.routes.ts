import { Router } from 'express';
import productController from '../products.msc/controller.product';

const productRoute: Router = Router();

productRoute.get('/', productController.getAll);
productRoute.post('/', productController.create);

export default productRoute;