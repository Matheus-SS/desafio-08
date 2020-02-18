import React from 'react';
import { Provider } from 'react-redux';
import NavigationService from './src/services/NavigationService';

import './src/config/reactotronConfig';

import Routes from './src/routes';

import store from './src/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    </>
  );
};

export default App;
