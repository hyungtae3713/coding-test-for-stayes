import axios from 'axios';
import todo from './todo';

axios.defaults.baseURL = 'http://localhost:8001/api/v1.0/';
axios.defaults.timeout = 3000;

const api = { todo };

export default api;


