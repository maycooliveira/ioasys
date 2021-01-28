import axios from 'axios';
import APP from '../configs/app';

const api = axios.create({
  baseURL: APP.URL_BASE,
});

export default api;
