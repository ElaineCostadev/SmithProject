import productModel from './model.product';
import Iproducts from '../interfaces/products.interface';

const productService = {
  getAll: async (): Promise<Iproducts[]> => {
    const result = await productModel.getAll();
    return result;
  },

  create: async (product: Iproducts) => {
    const { insertId } = await productModel.create(product);
    const newProduct = product;
    newProduct.id = insertId;
    return { ...newProduct };
  },
};

export default productService;
