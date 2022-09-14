import CustomError from '../errors/CustomError';
import Ilogin from '../interfaces/login.interface';
import jwtCode from '../JWThelpers/jwtfunctions';
import loginModel from './model.login';

const serviceLogin = {
  login: async (user: Ilogin) => {
    const { username, password } = user;
    const responseUser = await loginModel.login(user);

    const findUser = responseUser.find((eachUser) => username === eachUser.username);
    const findPassword = responseUser.find((eachUser) => password === eachUser.password);

    if (!findUser) {
      throw new CustomError(401, 'Username or password invalid');
    }

    if (!findPassword) {
      throw new CustomError(401, 'Username or password invalid');
    } 

    const token = jwtCode.generateToken({ username });
    return token;
  },
};

export default serviceLogin;
