import {MovieInterface} from '../Interfaces/MovieActionsInterface';

export const GET_POPULAR_MOVIES_ATTEMPT = 'GET_POPULAR_MOVIES';
export const GET_POPULAR_MOVIES_SUCCESS = 'GET_POPULAR_MOVIES_SUCCESS';
export const GET_POPULAR_MOVIES_FAILURE = 'GET_POPULAR_MOVIES_FAILURE';

export const GET_RELATED_MOVIES_ATTEMPT = 'GET_RELATED_MOVIES_ATTEMPT';
export const GET_RELATED_MOVIES_SUCCESS = 'GET_RELATED_MOVIES_SUCCESS';
export const GET_RELATED_MOVIES_FAILURE = 'GET_RELATED_MOVIES_FAILURE';

export const SEARCH_MOVIE_ATTEMPT = 'SEARCH_MOVIE_ATTEMPT';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const SEARCH_MOVIE_FAILURE = 'SEARCH_MOVIE_FAILURE';

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

interface GetRelatedMoviesAttempt {
  type: typeof GET_RELATED_MOVIES_ATTEMPT;
}

interface GetRelatedMoviesSuccess {
  type: typeof GET_RELATED_MOVIES_SUCCESS;
  payload: MovieInterface;
}

interface GetRelatedMoviesFailure {
  type: typeof GET_RELATED_MOVIES_FAILURE;
  payload: string;
}

interface SearchMoviesAttempt {
  type: typeof SEARCH_MOVIE_ATTEMPT;
}

interface SearchMoviesSuccess {
  type: typeof SEARCH_MOVIE_SUCCESS;
  payload: MovieInterface;
}

interface SearchMoviesFailure {
  type: typeof SEARCH_MOVIE_FAILURE;
  payload: string;
}

export type MoviesActionsTypes =
  | GetPopularMoviesAttempt
  | GetPopularMoviesSuccess
  | GetPopularMoviesFailure
  | GetRelatedMoviesAttempt
  | GetRelatedMoviesSuccess
  | GetRelatedMoviesFailure
  | SearchMoviesAttempt
  | SearchMoviesSuccess
  | SearchMoviesFailure;
