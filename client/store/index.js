import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from '/client/store/modules/user'

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    user
  }
})

export default store