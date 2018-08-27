import express from 'express';
import config from './config';
import connectMiddlewares from './middlewares';
import service from './services';
import api from './api';

const app = express();

connectMiddlewares(app);
service();

app.use('/api', api);

app.listen(config.port, () => {
  console.log(`Listening to: ${config.port}`)
})