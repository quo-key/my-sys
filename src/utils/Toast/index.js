import Vue from 'vue';
import toast from './index.vue';

const Toast = Vue.extend(toast);

const showToast = ({ msg, type }) => {
  const app = new Toast({
    el: document.createElement('div'),
    data() {
      return {
        msg,
        type,
      };
    },
  });
  document.body.appendChild(app.$el);
  setTimeout(() => {
    app.exist = false;
  }, 2000);
};
export default showToast;
