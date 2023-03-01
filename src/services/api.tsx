import axios from 'axios';

export const api = axios.create({
  baseURL: ' https://hamburgueria-kenzie-v2.herokuapp.com',
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@Token');
  const { headers } = config;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});
