import ordersModel from './model.order';
// import Iorders from '../interfaces/orders.interface';

const ordersService = {
  getAll: async () => {
    const result = await ordersModel.getAll();
    return result;
  },
};

export default ordersService;