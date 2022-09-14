import { ResultSetHeader } from 'mysql2';
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
};

export default usersModel;
