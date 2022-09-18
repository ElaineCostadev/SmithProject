import { Router } from 'express';
import ordersController from '../orders.msc/controller.order';
import validateToken from '../middlewares/validateToken';
import validateOrders from '../middlewares/validateOrders';

const orderRoute: Router = Router();

orderRoute.get('/', ordersController.getAll);
orderRoute.post('/', validateToken, validateOrders, ordersController.create);

export default orderRoute;