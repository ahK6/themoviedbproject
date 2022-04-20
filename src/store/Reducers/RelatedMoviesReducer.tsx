import {AnyAction} from 'redux';
import {RelatedMoviesInterface} from '../Interfaces/MovieActionsInterface';
import {
  GET_RELATED_MOVIES_ATTEMPT,
  GET_RELATED_MOVIES_SUCCESS,
  GET_RELATED_MOVIES_FAILURE,
} from '../Types/MoviesTypes';
const initialState = {
  relatedData: [],
  page: 0,
  lastPage: 0,
  status: '',
  errors: '',
};

const RelatedMoviesReducer = (
  state: RelatedMoviesInterface = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
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
        relatedData: action.payload.results,
        errors: '',
      };
    case GET_RELATED_MOVIES_FAILURE:
      return {
        ...state,
        status: 'failed',
        errors: action.payload,
        relatedData: [],
      };

    default:
      return state;
  }
};

export default RelatedMoviesReducer;
