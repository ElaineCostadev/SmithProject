import { Request, Response } from 'express';
import serviceLogin from './service.login';

const controllerLogin = {
  login: async (req: Request, res: Response) => {
    const result = await serviceLogin.login(req.body);
    res.status(200).json({ token: result });
  },
};

export default controllerLogin;
