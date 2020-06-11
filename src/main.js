import 'core-js/stable';
import Vue from 'vue';
import CoreuiVue from '@coreui/vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './helpers/axios-interceptor';

Vue.use(Vuelidate);

Vue.config.productionTip = false;
Vue.config.performance = true;
Vue.use(CoreuiVue);
Vue.prototype.$log = console.log.bind(console);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
