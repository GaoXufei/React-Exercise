import axios from 'axios';

axios.interceptors.request.use(
  config => {
    return config;
  },
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return error;
  }
)

export default axios;