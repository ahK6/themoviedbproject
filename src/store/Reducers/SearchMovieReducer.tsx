import {AnyAction} from 'redux';
import {
  MovieInterface,
  SearchMovieInterface,
} from '../Interfaces/MovieActionsInterface';
import {
  SEARCH_MOVIE_ATTEMPT,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE,
} from '../Types/MoviesTypes';
const initialState = {
  searchData: [],
  page: 0,
  lastPage: 0,
  status: '',
  errors: '',
};

const SearchMoviesReducer = (
  state: SearchMovieInterface = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case SEARCH_MOVIE_ATTEMPT:
      return {
        ...state,
        status: action.payload,
        errors: '',
      };
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        status: 'success',
        searchData: action.payload.results,
        errors: '',
      };
    case SEARCH_MOVIE_FAILURE:
      return {
        ...state,
        status: 'failed',
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default SearchMoviesReducer;
