import { Router } from 'express';
import usersController from '../users.msc/controller.user';
import validateUser from '../middlewares/validadeUser';

const usersRoute: Router = Router();

// usersRoute.get('/', usersController.getAll);
usersRoute.post('/', validateUser, usersController.create);

export default usersRoute;