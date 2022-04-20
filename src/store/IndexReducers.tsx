import {combineReducers} from 'redux';
import LoginReducer from './Reducers/LoginReducer';
import MoviesReducer from './Reducers/MoviesReducer';
import RelatedMoviesReducer from './Reducers/RelatedMoviesReducer';
import SearchMoviesReducer from './Reducers/SearchMovieReducer';

const RootReducer = combineReducers({
  Login: LoginReducer,
  Movies: MoviesReducer,
  RelatedMovies: RelatedMoviesReducer,
  SearchMovies: SearchMoviesReducer,
});

export default RootReducer;
