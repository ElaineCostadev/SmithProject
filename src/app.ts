import express from 'express';
import 'express-async-errors';
import errorMiddleware from './errors/errorMiddleware';
import route from './routes';

const app = express();

app.use(express.json());

app.use('/login', route.loginRoute);
app.use('/products', route.productRoutes);
app.use('/orders', route.ordersRoutes);
app.use('/users', route.usersController);

app.use(errorMiddleware);

export default app;
