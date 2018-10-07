import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import * as modules from './module'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    pageTitle: ''
  },
  actions,
  mutations,
  modules
})

export default store;
