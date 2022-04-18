import axios from 'axios';
import {store} from '../../store/store';

function axiosListener() {
  let accessToken = store.getState().Login.token;
  console.log('wefwef ' + accessToken);
  if (accessToken != undefined && accessToken != '') {
    axiosInstance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
}

/**
 * Se subscribe al store para obtener el token automaticamente
 */
store.subscribe(axiosListener);

const URL_LOGIN_BASE = 'https://reqres.in/api/login';

export const axiosInstance = axios.create({
  baseURL: URL_LOGIN_BASE,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
