import {MovieInterface} from '../Interfaces/MovieActionsInterface';

export const GET_POPULAR_MOVIES_ATTEMPT = 'GET_POPULAR_MOVIES';
export const GET_POPULAR_MOVIES_SUCCESS = 'GET_POPULAR_MOVIES_SUCCESS';
export const GET_POPULAR_MOVIES_FAILURE = 'GET_POPULAR_MOVIES_FAILURE';

interface GetPopularMoviesAttempt {
  type: typeof GET_POPULAR_MOVIES_ATTEMPT;
}

interface GetPopularMoviesSuccess {
  type: typeof GET_POPULAR_MOVIES_SUCCESS;
  payload: MovieInterface;
}

interface GetPopularMoviesFailure {
  type: typeof GET_POPULAR_MOVIES_FAILURE;
  payload: string;
}

export type MoviesActionsTypes =
  | GetPopularMoviesAttempt
  | GetPopularMoviesSuccess
  | GetPopularMoviesFailure;