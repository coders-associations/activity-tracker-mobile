import axios from '../lib/axios';

class AuthService {
  signIn(email: string, password: string) {
    return axios.post('/users/login', {
      email,
      password,
    });
  }

  signUp(email: string, password: string) {
    return axios.post('/users', {
      email,
      password,
    });
  }
}

export default new AuthService();
