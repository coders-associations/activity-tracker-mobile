import { combineReducers } from 'redux';
import app from './app';
import auth from './auth';

const reducer = combineReducers({
  app,
  auth,
});

export type Action = { type: string; payload: Object };
export type Dispatch = (action: Action | Promise<Action>) => Promise<*>;

export default reducer;
