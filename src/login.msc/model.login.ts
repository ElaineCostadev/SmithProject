import { RowDataPacket } from 'mysql2';
import connection from '../models/connection';
import Ilogin from '../interfaces/login.interface';

const loginModel = {
  login: async (user: Ilogin): Promise<RowDataPacket[]> => {
    const queryUser = 'SELECT username, password FROM Trybesmith.Users WHERE username = ?';

    const [resultQuery] = await connection.execute<RowDataPacket[]>(queryUser, [user.username]);
    
    return resultQuery;
  },
};

export default loginModel;

/* 
login: async (user: Ilogin): Promise<Ilogin[]> => {
  const queryUser = 'SELECT username, password FROM Trybesmith.Users WHERE username = ?';

  const [[resultQuery]] = await connection.execute<RowDataPacket[][]>(queryUser, [user.username]);
  
  return resultQuery as Ilogin[];
},
*/