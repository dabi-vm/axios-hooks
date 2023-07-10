import axios from 'axios';
import { getLocalStorageItem } from '../utils/local-storage';

axios.interceptors.request.use(
  async (config) => {
    config.baseURL = `baseURL`;
    const userToken = getLocalStorageItem('userToken');

    if (userToken) {
      config.headers.Authorization = 'Bearer ' + JSON.parse(userToken);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const login = `/api/v1/login`;
