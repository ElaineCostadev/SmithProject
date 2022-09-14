import { RowDataPacket } from 'mysql2';
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
};

export default ordersModel;
