// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import { Swipe, SwipeItem } from 'vant';
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from "axios"
import "./assets/rem.js"
Vue.prototype.http = axios

Vue.config.productionTip = false
//Vue.use(Swipe);
//Vue.use(SwipeItem);
Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
