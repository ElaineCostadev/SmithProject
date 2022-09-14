import { Router } from 'express';
import loginController from '../login.msc/controller.login';
import validateLogin from '../middlewares/validateLogin';

const loginRoute = Router();

loginRoute.post('/', validateLogin, loginController.login);

export default loginRoute;