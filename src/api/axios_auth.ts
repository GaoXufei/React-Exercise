import axios from 'axios';


axios.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { response: { status } } = error;

    if (status === 401) {
      window.location.href = `/user/login`
    }

    return error;
  }
)

export default axios;