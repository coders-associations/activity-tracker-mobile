import type { Action } from '.';

const ENABLE_NETWORK_STATUS = 'APP/ENABLE_NETWORK_STATUS';
const DISABLE_NETWORK_STATUS = 'APP/DISABLE_NETWORK_STATUS';
const ENABLE_API_STATUS = 'APP/ENABLE_API_STATUS';
const DISABLE_API_STATUS = 'APP/DISABLE_API_STATUS';

type State = {
  networkStatus: boolean,
  apiStatus: boolean,
};

const initialState = {
  networkStatus: false,
  apiStatus: false,
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ENABLE_NETWORK_STATUS:
      return {
        ...state,
        networkStatus: true,
      };

    case DISABLE_NETWORK_STATUS:
      return {
        ...state,
        networkStatus: false,
      };

    case ENABLE_API_STATUS:
      return {
        ...state,
        apiStatus: true,
      };

    case DISABLE_API_STATUS:
      return {
        ...state,
        apiStatus: false,
      };

    default:
      return state;
  }
};

export const enableNetworkStatus = () => ({ type: ENABLE_NETWORK_STATUS });
export const disableNetworkStatus = () => ({ type: DISABLE_NETWORK_STATUS });
export const enableApiStatus = () => ({ type: ENABLE_API_STATUS });
export const disableApiStatus = () => ({ type: DISABLE_API_STATUS });
