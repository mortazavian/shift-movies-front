import { createStore } from 'vuex'

import rootGetter from './getters';
import rootMutations from './mutations';
import rootActions from './actions';

const store = createStore({
  state() {
    return {

    }
  },
  getters: rootGetter,
  mutations: rootMutations,
  actions: rootActions,
  modules: {
  }
})

export default store;