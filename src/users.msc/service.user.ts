import usersModel from './model.user';
import Iusers from '../interfaces/users.interface';
import jwtCode from '../JWThelpers/jwtfunctions';

const usersService = {
  create: async (user: Iusers) => {
    const { insertId } = await usersModel.create(user);
    const newUser = user;
    newUser.id = insertId;
    const { username } = newUser;
    const token = jwtCode.generateToken({ username });
    return token;
  },
};

export default usersService;
