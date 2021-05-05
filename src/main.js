import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Cookie from './utils/cookie';
import api from './api';
import Toast from './utils/Toast';

Vue.prototype.Cookie = Cookie;
Vue.prototype.$api = api;
Vue.prototype.$Toast = Toast;
// Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
