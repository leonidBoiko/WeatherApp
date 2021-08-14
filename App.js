import React, {useEffect} from 'react';
import Router from './src/router';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import store from './src/store/index';

const App = () => {
  useEffect(() => SplashScreen.hide(), []);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
