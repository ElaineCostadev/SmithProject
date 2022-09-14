import { Router } from 'express';
import ordersController from '../orders.msc/controller.order';

const orderRoute: Router = Router();

orderRoute.get('/', ordersController.getAll);

export default orderRoute;