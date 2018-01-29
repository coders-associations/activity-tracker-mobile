import { createStore, applyMiddleware, combineReducers } from 'redux';
import auth from './auth';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const reducer = combineReducers({
  auth,
});

const configureStore = initialState => createStoreWithMiddleware(reducer, initialState);

export type Action = { type: string; payload: Object };
export type Dispatch = (action: Action | Promise<Action>) => Promise<*>;

export default configureStore;
