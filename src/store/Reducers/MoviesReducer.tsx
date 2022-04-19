import {AnyAction} from 'redux';
import {MovieInterface} from '../Interfaces/MovieActionsInterface';
import {
  GET_POPULAR_MOVIES_ATTEMPT,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_FAILURE,
} from '../Types/MoviesTypes';
const initialState = {
  data: '',
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
        data: action.payload,
        errors: '',
      };
    case GET_POPULAR_MOVIES_FAILURE:
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
