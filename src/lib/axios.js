import axios from 'axios';

const apiUrl = 'http://localhost:3000';

const axiosClient = axios.create({
  baseURL: apiUrl,
});

const axiosClientAuthenticated = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: 'Bearer', // TODO Add token
  },
});

export {
  axiosClient,
  axiosClientAuthenticated,
};
