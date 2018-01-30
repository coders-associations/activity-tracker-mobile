import axios from 'axios';
// import { store } from '../reducers';

const apiUrl = 'http://localhost:3000';

// const { token } = store.getState().auth;

const axiosClient = axios.create({
  baseURL: apiUrl,
});

const axiosClientAuthenticated = axios.create({
  baseURL: apiUrl,
  headers: {
    // 'Authorization': `Bearer ${token}`,
  },
});

export {
  axiosClient,
  axiosClientAuthenticated,
};
