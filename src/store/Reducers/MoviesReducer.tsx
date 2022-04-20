import {AnyAction} from 'redux';
import {MovieInterface} from '../Interfaces/MovieActionsInterface';
import {
  GET_POPULAR_MOVIES_ATTEMPT,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_FAILURE,
  GET_RELATED_MOVIES_ATTEMPT,
  GET_RELATED_MOVIES_SUCCESS,
  GET_RELATED_MOVIES_FAILURE,
  SEARCH_MOVIE_ATTEMPT,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE,
} from '../Types/MoviesTypes';
const initialState = {
  data: [],
  movieData: [],
  dataSearch: [],
  page: 0,
  lastPage: 0,
  status: '',
  errors: '',
};

const MoviesReducer = (
  state: MovieInterface = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES_ATTEMPT:
      return {
        ...state,
        status: action.payload,
        errors: '',
      };
    case GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        status: 'success',
        data: [...state.data, ...action.payload.results],
        page: action.payload.page,
        lastPage: action.payload.total_pages,
        errors: '',
      };
    case GET_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        status: 'failed',
        errors: action.payload,
      };

    case GET_RELATED_MOVIES_ATTEMPT:
      return {
        ...state,
        status: action.payload,
        errors: '',
      };
    case GET_RELATED_MOVIES_SUCCESS:
      return {
        ...state,
        status: 'success',
        movieData: action.payload.results,
        errors: '',
      };
    case GET_RELATED_MOVIES_FAILURE:
      return {
        ...state,
        status: 'failed',
        errors: action.payload,
      };

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
        dataSearch: action.payload.results,
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

export default MoviesReducer;
