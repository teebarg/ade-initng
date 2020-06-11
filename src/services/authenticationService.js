import AxiosHttp from '@/helpers/axios-http';
import ApiEndPoint from '@/helpers/constants';
import Utility from '@/helpers/utilities';

class AuthenticationService {
  static async login(payload) {
    try {
      return await AxiosHttp.post(`${ApiEndPoint.AUTH}`, payload);
    } catch (err) {
      Utility.handleError(err);
      throw err;
    }
  }
}

export default AuthenticationService;
