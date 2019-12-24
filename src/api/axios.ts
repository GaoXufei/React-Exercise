import axios from 'axios';

axios.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token') || "";
    config.headers.Authorization = `Bearer Token ${token}`;
    return config;
  },
);

export default axios;