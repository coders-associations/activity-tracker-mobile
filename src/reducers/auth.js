import type { Action } from '.';

const LOGIN = 'AUTH/LOGIN';
const LOGOUT = 'AUTH/LOGOUT';
const SET_TOKEN = 'AUTH/SET_TOKEN';

type State = {
  logged: boolean,
  token: string,
};

const initialState = {
  logged: false,
  token: '',
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

    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });
export const setToken = (payload: Object) => ({ type: SET_TOKEN, payload });
