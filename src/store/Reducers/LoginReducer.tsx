import {AnyAction} from 'redux';
import {LoginInterface} from '../Interfaces/LoginInterface';
import {LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILURE} from '../Types/LoginTypes';

const initialState = {
  status: '',

  token: '',
  errors: '',
};

const LoginReducer = (
  state: LoginInterface = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return {
        ...state,
        status: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        status: 'success',
        token: action.payload,
        errors: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        status: 'failed',
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default LoginReducer;
