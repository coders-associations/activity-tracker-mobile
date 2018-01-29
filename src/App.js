import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './reducers';
import { Router } from './components';

declare var GLOBAL;
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
