import productModel from './model.product';
import Iproducts from '../interfaces/products.interface';

const productService = {
  getAll: async (): Promise<Iproducts[]> => {
    const result = await productModel.getAll();
    return result;
  },
};

export default productService;
