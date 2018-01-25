import { createStore, applyMiddleware, combineReducers } from 'redux';
import auth from './auth';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const reducer = combineReducers({
  auth,
});

const configureStore = initialState => createStoreWithMiddleware(reducer, initialState);

export default configureStore;
