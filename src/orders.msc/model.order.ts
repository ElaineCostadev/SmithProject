import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from '../models/connection';

// ajuda para encontrar a query JSON_ARRAYAGG com Luiz Guilherme e Gabriel Kauer
// https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html

const ordersModel = {
  getAll: async (): Promise<RowDataPacket[]> => {
    const queryOrdersWithProducts = `
    SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.Orders AS o
    JOIN Trybesmith.Products as p
    ON o.id = p.orderId
    GROUP BY p.orderId
    ORDER BY o.userId ASC;`;

    const [resultQuery] = await connection.execute<RowDataPacket[]>(queryOrdersWithProducts);

    return resultQuery;
  },

  create: async (user: RowDataPacket[0], productsIds: []) => {
    // insiro o Id encontrado anteriomente e insiro na tabela Order
    const queryOrder = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?);';
    const [resultOrder] = await connection
      .execute<ResultSetHeader>(queryOrder, [user.id]);

    // acesso cada produto para atualizar
    // pego os produtos inseridos no body para cadastrar na table products com o Order encontrado anteriormente
    const queryProducts = ` UPDATE Trybesmith.Products
                            SET orderId = ?
                            WHERE id = ?;`;
    productsIds.forEach((async (eachProduct: []) => {
      await connection.execute(queryProducts, [resultOrder.insertId, eachProduct]);
    }));

    return { userId: user.id, productsIds };
  },
};

export default ordersModel;
