import AxiosHttp from '@/helpers/axios-http';
import ApiEndPoint from '@/helpers/constants';
import Utility from '@/helpers/utilities';

class ImageService {
  static async createImage(id, payload) {
    try {
      return await AxiosHttp.post(`${ApiEndPoint.IMAGE}/${id}`, payload);
    } catch (err) {
      Utility.handleError(err);
      throw err;
    }
  }

  static async updateImage(id, payload) {
    try {
      return await AxiosHttp.put(`${ApiEndPoint.IMAGE}/${id}`, payload);
    } catch (err) {
      Utility.handleError(err);
      throw err;
    }
  }
}

export default ImageService;
