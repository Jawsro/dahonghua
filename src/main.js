import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/iconfont/iconfont.css';
import '@/assets/css/common.styl';

import 'lib-flexible'
Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
