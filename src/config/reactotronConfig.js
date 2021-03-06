import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  // Check if it's development mode
  const tron = Reactotron.configure({ host: '192.168.1.5' })
    .useReactNative() // Appling React-Native plugin
    .use(reactotronRedux()) // Applying Redux plugin
    .use(reactotronSaga()) // Applying Saga plugin
    .connect(); // Connect to local client

  console.tron = tron; // Extend console with tron for being able to debug to Reactotron
  tron.clear();
}
