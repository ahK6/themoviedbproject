import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import ReduxThunk from 'redux-thunk';

import reducers from './IndexReducers';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Login'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
let persistor = persistStore(store);
export {store, persistor};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
