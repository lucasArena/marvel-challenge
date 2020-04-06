import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public',
  params: {
    hash: '',
    apikey: '',
  },
});

api.interceptors.response.use((config) => {
  const { data } = config;

  return Promise.resolve(data);
});

export default api;
