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
  GET_RELATED_MOVIES_ATTEMPT,
  GET_RELATED_MOVIES_SUCCESS,
  GET_RELATED_MOVIES_FAILURE,
  SEARCH_MOVIE_ATTEMPT,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE,
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
        dispatch(MoviesAction(GET_POPULAR_MOVIES_SUCCESS, response.data));
      })
      .catch(error => {
        dispatch(
          MoviesAction(
            GET_POPULAR_MOVIES_FAILURE,
            error.response.data.errors[0],
          ),
        );
      });
  };
};

export const GetMovieDetail = (movieId: number = 0) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(MoviesAction(GET_RELATED_MOVIES_ATTEMPT, 'updating'));

    axiosMoviesInstance
      .get(`/movie/${movieId}/similar`)
      .then(response => {
        dispatch(MoviesAction(GET_RELATED_MOVIES_SUCCESS, response.data));
      })
      .catch(error => {
        dispatch(
          MoviesAction(
            GET_RELATED_MOVIES_FAILURE,
            error.response.data.errors[0],
          ),
        );
      });
  };
};

export const SearchMovie = (query: String = '') => {
  return (dispatch: Dispatch<any>) => {
    dispatch(MoviesAction(SEARCH_MOVIE_ATTEMPT, 'updating'));

    axiosMoviesInstance
      .get(`/search/movie?query=${query}`)
      .then(response => {
        dispatch(MoviesAction(SEARCH_MOVIE_SUCCESS, response.data));
      })
      .catch(error => {
        dispatch(
          MoviesAction(SEARCH_MOVIE_FAILURE, error.response.data.errors[0]),
        );
      });
  };
};
