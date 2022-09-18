import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from '../models/connection';
import Iusers from '../interfaces/users.interface';

const usersModel = {
  create: async (user: Iusers): Promise<ResultSetHeader> => {
    const queryCreateUser = `INSERT INTO Trybesmith.Users (username, classe, level, password)
                              VALUES (?, ?, ?, ?)`;
    const { username, classe, level, password } = user;
    const [resultUser] = await connection
      .execute<ResultSetHeader>(queryCreateUser, [username, classe, level, password]);
    return resultUser;
  },

  getByPk: async (username: string): Promise<RowDataPacket[]> => {
    const queryUser = 'SELECT id FROM Trybesmith.Users WHERE username = ?';
    const [[resultUser]] = await connection.execute<RowDataPacket[][]>(queryUser, [username]);
    return resultUser;
  },
  
};

export default usersModel;
