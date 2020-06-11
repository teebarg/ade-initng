import AuthenticationService from '@/services/authenticationService';
import router from '@/router';
import Utility from '@/helpers/utilities';
import CookieService from '@/services/cookieService';
import { CookieName } from '@/helpers/constants';
import BusinessService from '@/services/businessService';
import CategoryService from '@/services/categoryService';
import { ADMIN } from '../mutants';

export default {
  [ADMIN.LOGIN](state, payload) {
    AuthenticationService.login(payload)
      .then(() => {
        CookieService.set(CookieName.TOKEN, 'authenticated');
        router.push(router.app._route.query.redirectTo || '/admin/business');
      });
  },
  [ADMIN.GET_BUSINESS]({ commit }) {
    BusinessService.getBusinesses()
      .then((resp) => {
        commit(ADMIN.GET_BUSINESS, resp);
      });
  },
  [ADMIN.CREATE_BUSINESS]({ commit }, payload) {
    BusinessService.createBusiness(payload)
      .then((resp) => {
        commit(ADMIN.CREATE_BUSINESS, resp);
        Utility.handleSuccess();
        router.push('/admin/business');
      });
  },
  [ADMIN.UPDATE_BUSINESS]({ commit }, { id, payload }) {
    BusinessService.updateBusiness(id, payload)
      .then((resp) => {
        Utility.handleSuccess('Business Updated Successfully');
        commit(ADMIN.UPDATE_BUSINESS, { id, resp });
      });
  },
  [ADMIN.DELETE_BUSINESS]({ commit }, id) {
    BusinessService.deleteBusiness(id)
      .then(() => {
        Utility.handleSuccess('Business Deleted Successfully');
        commit(ADMIN.DELETE_BUSINESS, id);
      });
  },
  [ADMIN.GET_CATEGORIES]({ commit }) {
    CategoryService.getCategories()
      .then((resp) => {
        console.log(resp);
        commit(ADMIN.GET_CATEGORIES, resp);
      });
  },
  [ADMIN.CREATE_CATEGORY]({ commit }, payload) {
    CategoryService.createCategory(payload)
      .then((resp) => {
        console.log(resp);
        commit(ADMIN.CREATE_CATEGORY, resp);
        router.push('/admin/category');
      });
  },
  [ADMIN.UPDATE_CATEGORY]({ commit }, { id, payload }) {
    CategoryService.updateCategory(id, payload)
      .then((resp) => {
        Utility.handleSuccess('Category Updated Successfully');
        commit(ADMIN.UPDATE_CATEGORY, { id, resp });
      });
  },
  [ADMIN.DELETE_CATEGORY]({ commit }, id) {
    CategoryService.deleteCategory(id)
      .then(() => {
        Utility.handleSuccess('Category Deleted Successfully');
        commit(ADMIN.DELETE_CATEGORY, id);
      });
  },
};
