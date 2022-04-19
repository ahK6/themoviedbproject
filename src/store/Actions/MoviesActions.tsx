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

export const GetPopularMovies = (page: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(MoviesAction(GET_POPULAR_MOVIES_ATTEMPT, 'loading'));

    axiosMoviesInstance
      .get(`/movie/popular?&page=${page}`)
      .then(response => {
        //console.log(response.data);
        dispatch(MoviesAction(GET_POPULAR_MOVIES_SUCCESS, response.data));
      })
      .catch(error => {
        //console.log(error.response);
        dispatch(MoviesAction(GET_POPULAR_MOVIES_FAILURE, error.response));
      });
  };
};
