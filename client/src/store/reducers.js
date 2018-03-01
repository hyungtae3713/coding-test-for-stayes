import camelCase from 'lodash/camelCase';
import { combineReducers } from 'redux';

const reducers = { };

const req = require.context('.', true, /\.\/resources\/.+\/reducer\.js$/);

req.keys().forEach((key) => {
  const storeName = camelCase(key.replace(/\.\/resources\/(.+)\/.+$/, '$1'));
  reducers[storeName] = req(key).default;
});

export default combineReducers(reducers);