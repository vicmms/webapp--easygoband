import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: []
  },

  actions: {
    async fetchBeers({ commit }, pagination) {
      const response = await axios.get(`beers?page=${pagination.currentPage}&per_page=${pagination.perPage}`);
      commit('SET_BEERS', response.data);
      console.log(response)
    },
  },
  mutations: {
    SET_BEERS: (state, beers) => {
      state.beers = beers
    },
  },
  modules: {
  }
})
