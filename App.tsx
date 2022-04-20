import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';

import RootNavigation from './src/Navigation/IndexNavigation';
import {store} from './src/store/store';
LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
