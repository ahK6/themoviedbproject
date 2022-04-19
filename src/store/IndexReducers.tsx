import {combineReducers} from 'redux';
import LoginReducer from './Reducers/LoginReducer';
import MoviesReducer from './Reducers/MoviesReducer';

const RootReducer = combineReducers({
  Login: LoginReducer,
  Movies: MoviesReducer,
});

export default RootReducer;
