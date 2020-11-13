import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/base.css'
import './assets/rem'
import './assets/format'
import axios from 'axios';
import VueI18n from 'vue-i18n'
import { Modal } from 'ant-design-vue';

Vue.use(VueI18n);
Vue.use(Modal);
const baseurl = '/oms/';
Vue.prototype.$baseurl = baseurl;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./lang/zh.json'),
    'en': require('./lang/en.json')
  }
})
new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
