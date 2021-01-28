import Reactotron from 'reactotron-react-native';
// import { reactotronRedux } from 'reactotron-redux';
import { AsyncStorage } from 'react-native';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative()
    // .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
  console.log = Reactotron.log;
  console.warn = Reactotron.warn;
  console.display = Reactotron.display;
  console.error = Reactotron.error;
}
