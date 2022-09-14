import { Router } from 'express';
import usersController from '../users.msc/controller.user';

const usersRoute: Router = Router();

// usersRoute.get('/', usersController.getAll);
usersRoute.post('/', usersController.create);

export default usersRoute;