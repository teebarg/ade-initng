import AxiosHttp from '@/helpers/axios-http';
import ApiEndPoint from '@/helpers/constants';
import Utility from '@/helpers/utilities';

class BusinessService {
  static async getBusinesses(payload) {
    try {
      return await AxiosHttp.get(`${ApiEndPoint.BUSINESS}`, payload);
    } catch (err) {
      Utility.handleError(err);
      throw err;
    }
  }

  static async getBusiness(id) {
    try {
      return await AxiosHttp.get(`${ApiEndPoint.BUSINESS}/${id}`);
    } catch (err) {
      Utility.handleError(err);
      throw err;
    }
  }

  static async createBusiness(payload) {
    try {
      return await AxiosHttp.post(`${ApiEndPoint.BUSINESS}`, payload);
    } catch (err) {
      Utility.handleError(err);
      throw err;
    }
  }

  static async updateBusiness(id, payload) {
    try {
      return await AxiosHttp.put(`${ApiEndPoint.BUSINESS}/${id}`, payload);
    } catch (err) {
      Utility.handleError(err);
      throw err;
    }
  }

  static async deleteBusiness(id) {
    try {
      return await AxiosHttp.delete(`${ApiEndPoint.BUSINESS}/${id}`);
    } catch (err) {
      Utility.handleError(err);
      throw err;
    }
  }
}

export default BusinessService;
