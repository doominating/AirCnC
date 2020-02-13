import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.31.1.6:3333',
});

export default api;
