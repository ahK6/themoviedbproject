import {LoginInterface} from '../Interfaces/LoginInterface';

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

interface LoginAttempt {
  type: typeof LOGIN_ATTEMPT;
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: LoginInterface;
}

interface LoginFailure {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

interface Logout {
  type: typeof LOGOUT;
}

export type LoginActionsTypes =
  | LoginAttempt
  | LoginSuccess
  | LoginFailure
  | Logout;
