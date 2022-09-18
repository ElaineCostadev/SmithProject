import usersModel from '../users.msc/model.user';
import ordersModel from './model.order';
import CustomError from '../errors/CustomError';

const ordersService = {
  getAll: async () => {
    const result = await ordersModel.getAll();
    return result;
  },

  create: async (username: string, productsIds: []) => {
    // entro o id do meu usuario
    const resultUser = await usersModel.getByPk(username);

    const orderResult = await ordersModel.create(resultUser, productsIds);
    if (!orderResult) throw new CustomError(400, 'Algo deu de errado, não foi possivel cadastrar');
    return orderResult;
  },
};

export default ordersService;