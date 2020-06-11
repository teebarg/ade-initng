import axios from 'axios';
import CookieService from '@/services/cookieService';
import router from '@/router';
import { CookieName } from './constants';

// Add axios request interceptor
axios.interceptors.request.use((config) => {
  const token = CookieService.get(CookieName.TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (err) => Promise.reject(err));

// Add axios response interceptor
axios.interceptors.response.use((response) => {
  if (response.headers.bearer) {
    CookieService.set(CookieName.TOKEN, response.headers.bearer);
  }
  return response.data;
}, ({ response: { data = [], status } }) => {
  if (status === 401) {
    // CookieService.delete(CookieName.TOKEN);
    // router.push({ path: '/auth', query: { redirectTo: router.history.current.path } });
  }
  return Promise.reject(data);
});
