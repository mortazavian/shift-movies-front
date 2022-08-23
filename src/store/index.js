import { createStore } from 'vuex'

import rootGetters from './getters.js';
import rootMutations from './mutations';
import rootActions from './actions';

const store = createStore({
  state() {
    return {
      counter: 0,
      username: "",
      password: "",
      token: "",
    }
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  modules: {
  }
})

export default store;