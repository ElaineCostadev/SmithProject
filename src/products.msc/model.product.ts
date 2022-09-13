import connection from '../models/connection';
import Iproducts from '../interfaces/products.interface';

const productModel = {
  getAll: async (): Promise<Iproducts[]> => {
    const queryAll = 'SELECT * FROM Trybesmith.Products';
    const [result] = await connection.execute(queryAll);
    return result as Iproducts[];
  },
};

export default productModel;
