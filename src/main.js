import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import BaseInput from './base/input';
import 'element-ui/lib/theme-chalk/index.css';
import particles from 'particles.js';
import serivce from './utils/serivce'
import store from '@/store'
Vue.config.productionTip = false


Vue.use(serivce)
Vue.use(particles)
Vue.use(ElementUI)
Vue.component('hd-input', BaseInput);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
