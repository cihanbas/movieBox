import axios from 'axios';
import { BASE_URL, token } from 'src/utils/constants';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config['headers']['Authorization'] = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error?.response?.data?.status_message) {
      alert(error.response.data.status_message);
    } else {
      alert('something went wrong, pls try again');
    }
    return Promise.reject(error);
  },
);

export default instance;
