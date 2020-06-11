import { ADMIN } from '../mutants';

export default {
  [ADMIN.GET_BUSINESS](state, { data: { data } }) {
    state.businesses = data;
  },
  [ADMIN.CREATE_BUSINESS](state, { data }) {
    state.businesses.push(data);
  },
  [ADMIN.UPDATE_BUSINESS](state, { id, resp: { data } }) {
    state.businesses = [
      ...state.businesses.filter((element) => element.id !== id),
      data,
    ];
  },
  [ADMIN.DELETE_BUSINESS](state, id) {
    state.businesses = [
      ...state.businesses.filter((element) => element.id !== id),
    ];
  },
  [ADMIN.GET_CATEGORIES](state, { data: { data } }) {
    state.categories = data;
  },
  [ADMIN.CREATE_CATEGORY](state, { data }) {
    state.categories.push(data);
  },
  [ADMIN.UPDATE_CATEGORY](state, { id, resp: { data } }) {
    state.categories = [
      ...state.categories.filter((element) => element.id !== id),
      data,
    ];
  },
  [ADMIN.DELETE_CATEGORY](state, id) {
    state.categories = [
      ...state.categories.filter((element) => element.id !== id),
    ];
  },
};
