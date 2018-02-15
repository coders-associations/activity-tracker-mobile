import { axiosClient } from '../lib/axios';

class AuthService {
  signIn(email: string, password: string) {
    return axiosClient.post('/auth', {
      email,
      password,
    });
  }

  signUp(email: string, password: string) {
    return axiosClient.post('/users', {
      email,
      password,
    });
  }
}

export default new AuthService();
