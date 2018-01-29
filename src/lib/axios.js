import axios from 'axios';

const axiosClient = axios.create({
  // baseURL: 'http://10.254.252.229:3000',
  baseURL: 'https://api.google.com/',
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json',
  },
});

export default axiosClient;
