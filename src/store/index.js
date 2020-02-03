import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// saga config + reactotron
const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

// saga config
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor, // saga config + reactotron
});

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(
        // It is used to work with 2 configs (compose)
        console.tron.createEnhancer(), // config redux + reactotron

        applyMiddleware(sagaMiddleware) // saga config
      )
    : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
