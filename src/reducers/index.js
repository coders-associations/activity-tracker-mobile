import { combineReducers } from 'redux';
import auth from './auth';

const reducer = combineReducers({
  auth,
});

export type Action = { type: string; payload: Object };
export type Dispatch = (action: Action | Promise<Action>) => Promise<*>;

export default reducer;
