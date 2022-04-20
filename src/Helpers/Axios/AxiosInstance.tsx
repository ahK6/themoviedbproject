import axios from 'axios';
import {store} from '../../store/store';

function axiosListener() {
  let accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWE2NjMwMGU4NGZhZGJhMmUxYmNlMzhlYTBhM2I5YiIsInN1YiI6IjYyNWUyZmY0MTk2OTBjMDA1MWNjOTY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BsprNV2vyx0SB6KhREjHsZUwUN05UuiU8ZPTu7fedMY';
  if (accessToken != undefined && accessToken != '') {
    axiosInstance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`;

    axiosMoviesInstance.defaults.headers.common[
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
const URL_MOVIES_BASE = 'https://api.themoviedb.org/3';

export const axiosInstance = axios.create({
  baseURL: URL_LOGIN_BASE,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const axiosMoviesInstance = axios.create({
  baseURL: URL_MOVIES_BASE,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
