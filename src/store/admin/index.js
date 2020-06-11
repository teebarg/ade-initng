import state from './state';
import mutations from './mutations';
import actions from './actions';

const AdminStore = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default AdminStore;
