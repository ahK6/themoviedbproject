import React from 'react';
import {Provider} from 'react-redux';

import RootNavigation from './src/Navigation/IndexNavigation';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
