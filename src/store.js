import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'

Vue.use(Vuex)
Vue.use(VuexFire)

export const store = new Vuex.Store({
  state: {
    name: 'app',
    learningType: null
  },
  mutations: VuexFire.mutations,
  getters: {
    sources: function (state) { return state.learningType }
  }
})
