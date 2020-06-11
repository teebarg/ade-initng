import axios from 'axios';
import Utility from './utilities';

axios.defaults.baseURL = process.env.VUE_APP_API_DOMAIN;
class AxiosHttp {
  static get(url, params = '') {
    return axios.get(url + Utility.getQueryParams(params));
  }

  static post(url, payload = {}) {
    return axios.post(url, payload);
  }

  static put(url, payload) {
    return axios.put(url, payload);
  }

  static delete(url) {
    return axios.delete(url);
  }
}

export default AxiosHttp;
