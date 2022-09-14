import { Router } from 'express';
import productController from '../products.msc/controller.product';
import validateProduct from '../middlewares/validateProduct';

const productRoute: Router = Router();

productRoute.get('/', productController.getAll);
productRoute.post('/', validateProduct, productController.create);

export default productRoute;