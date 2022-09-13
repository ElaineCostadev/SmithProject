import express from 'express';
import 'express-async-errors';
import errorMiddleware from './errors/errorMiddleware';
import routes from './routes/routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use(errorMiddleware);

export default app;
