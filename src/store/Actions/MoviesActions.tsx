import {ActionCreator, Dispatch} from 'redux';
import {
  axiosInstance,
  axiosMoviesInstance,
} from '../../Helpers/Axios/AxiosInstance';
import {
  MoviesActionsTypes,
  GET_POPULAR_MOVIES_ATTEMPT,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_FAILURE,
} from '../Types/MoviesTypes';

const MoviesAction: ActionCreator<MoviesActionsTypes> = (type, payload) => {
  return {type, payload};
};

export const GetPopularMovies = (page: number = 1) => {
  return (dispatch: Dispatch<any>) => {
    if (page === 1) {
      dispatch(MoviesAction(GET_POPULAR_MOVIES_ATTEMPT, 'loading'));
    } else if (page >= 2) {
      dispatch(MoviesAction(GET_POPULAR_MOVIES_ATTEMPT, 'updating'));
    }

    axiosMoviesInstance
      .get(`/movie/popular?&page=${page}`)
      .then(response => {
        console.log('pageee ' + response.data.total_pages);
        dispatch(MoviesAction(GET_POPULAR_MOVIES_SUCCESS, response.data));
      })
      .catch(error => {
        console.log('errrorrr' + error);
        dispatch(MoviesAction(GET_POPULAR_MOVIES_FAILURE, error.response));
      });
  };
};
