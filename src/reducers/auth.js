import type { Action } from '.';

const LOGIN = 'AUTH/LOGIN';
const LOGOUT = 'AUTH/LOGOUT';

type State = {
  logged: boolean;
};

const initialState = {
  logged: false,
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged: true,
      };

    case LOGOUT:
      return {
        ...state,
        logged: false,
      };

    default:
      return state;
  }
};

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });
