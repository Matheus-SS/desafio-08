import React from 'react';
import { Provider } from 'react-redux';
import './src/config/reactotronConfig';

import Routes from './src/routes';

import store from './src/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
