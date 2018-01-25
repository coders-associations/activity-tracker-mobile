import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './reducers';
import Router from './components/Router';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
