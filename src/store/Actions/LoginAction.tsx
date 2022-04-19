import {ActionCreator, Dispatch} from 'redux';
import {axiosInstance} from '../../Helpers/Axios/AxiosInstance';
import {Platform, Alert} from 'react-native';
import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LoginActionsTypes,
} from '../Types/LoginTypes';
import {useState} from 'react';

const LoginAction: ActionCreator<LoginActionsTypes> = (type, payload) => {
  return {type, payload};
};

export const loginUser = (email: string, password: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(LoginAction(LOGIN_ATTEMPT, 'loading'));

    axiosInstance
      .post('/', {
        email,
        password,
      })
      .then(response => {
        dispatch(LoginAction(LOGIN_SUCCESS, response.data.token));
      })
      .catch(error => {
        dispatch(LoginAction(LOGIN_FAILURE, error.response.data.error));
      });
  };
};

export const closeModal = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(LoginAction(LOGIN_ATTEMPT, ''));
  };
};

export const logout = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(LoginAction(LOGOUT));
  };
};
