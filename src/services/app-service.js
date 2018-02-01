import { NetInfo } from 'react-native';
import { axiosClient } from '../lib/axios';

class AppService {
  dispatch() {
    return axiosClient.get('/dispatcher');
  }

  getNetworkConnectionStatus(dispatchConnected: any) {
    NetInfo.isConnected.fetch().then().done(() => {
      NetInfo.isConnected.addEventListener('connectionChange', dispatchConnected);
    });
  }
}

export default new AppService();
