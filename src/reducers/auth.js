const LOGIN = 'AUTH/LOGIN';
const LOGOUT = 'AUTH/LOGOUT';

const initialState = {
  logged: false,
};

export default (state = initialState, action) => {
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
