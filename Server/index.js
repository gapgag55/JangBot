import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import registerServices from './src/services';
import api from './src/api';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

registerServices();

app.use('/api', api);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening to: ${port}`)
})