import axios from 'axios';
import Storage from './Storage';

const api = axios.create({
  baseURL: 'https://api.cashr.me/api'
});

api.interceptors.request.use(async (config) => {
  const token = await Storage.getItem('jwt-token');
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
