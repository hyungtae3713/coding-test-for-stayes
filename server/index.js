
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';

import api from './api';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.locals.todos = [];

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../client/build')));
app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});