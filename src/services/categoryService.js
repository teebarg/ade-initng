import AxiosHttp from '@/helpers/axios-http';
import ApiEndPoint from '@/helpers/constants';
import Utility from '@/helpers/utilities';

class CategoryService {
  static async getCategories() {
    try {
      return await AxiosHttp.get(`${ApiEndPoint.CATEGORY}`);
    } catch (err) {
      Utility.handleError(err);
      throw err;
    }
  }

  static async getCategory(id) {
    try {
      return await AxiosHttp.get(`${ApiEndPoint.CATEGORY}/${id}`);
    } catch (err) {
      Utility.handleError(err);
      throw err;
    }
  }

  static async createCategory(payload) {
    try {
      return await AxiosHttp.post(`${ApiEndPoint.CATEGORY}`, payload);
    } catch (err) {
      Utility.handleError(err);
      throw err;
    }
  }

  static async updateCategory(id, payload) {
    try {
      return await AxiosHttp.put(`${ApiEndPoint.CATEGORY}/${id}`, payload);
    } catch (err) {
      Utility.handleError(err);
      throw err;
    }
  }

  static async deleteCategory(id) {
    try {
      return await AxiosHttp.delete(`${ApiEndPoint.CATEGORY}/${id}`);
    } catch (err) {
      Utility.handleError(err);
      throw err;
    }
  }
}

export default CategoryService;
