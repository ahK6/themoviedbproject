import {combineReducers} from 'redux';
import LoginReducer from './Reducers/LoginReducer';

const RootReducer = combineReducers({
  Login: LoginReducer,
});

export default RootReducer;
