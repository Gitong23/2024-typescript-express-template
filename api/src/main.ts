import express from 'express';
import morgan from 'morgan';
import routes from './root-routes';
import { globalErrorHandler } from '@tscc/core';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

//parse json request body
app.use(express.json());
//parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', routes);

app.use(globalErrorHandler);

// app.get('/', (req, res) => {
//   res.send({ message: 'Hello API' });
// });

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
