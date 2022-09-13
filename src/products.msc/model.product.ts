import { ResultSetHeader } from 'mysql2';
import connection from '../models/connection';
import Iproducts from '../interfaces/products.interface';

const productModel = {
  getAll: async (): Promise<Iproducts[]> => {
    const queryAll = 'SELECT * FROM Trybesmith.Products';
    const [result] = await connection.execute(queryAll);
    return result as Iproducts[];
  },

  create: async (product: Iproducts): Promise<ResultSetHeader> => {
    const queryCreate = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [execute] = await connection
      .execute<ResultSetHeader>(queryCreate, [product.name, product.amount]);
    return execute;
  },
};

export default productModel;
