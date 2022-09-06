import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    view: 'list', //list/grid
    beers: [],
    beer: null,

    pagination: {
      page: 1,
      per_page: 10,
    },
    pageOptions: [10, 25, 50, 80],
    totalRows: 0,
    totalPages: 0,
    //YYYY-MM format aux for v-picker, The API needs MM-YYYY format
    brewed_before: null,
    brewed_after: null,

    filters: {
      brewed_before: null,
      brewed_after: null,
      abv_gt: 0,
      abv_lt: 0,
      beer_name: "",
    },

    isMobile: false
  },

  getters: {
    getField,
    // solo se envian los query params con valores validos y se formatea la fecha en forma MM-YYYY como la api lo solicita
    validFilterParams(state, getters) {
      state.filters.brewed_before = getters.formatDate(state.brewed_before)
      state.filters.brewed_after = getters.formatDate(state.brewed_after)
      return Object.fromEntries(Object.entries(state.filters).filter(([key, value]) => (value && value !== '')))
    },
    formatDate: () => (date) => {
      if (!date) return null;
      const [year, month] = date.split("-");
      return `${month}/${year}`;
    },
    // count total rows from api
    getTotalBeers: (state, getters) => (page = 1, beers = []) => {
      axios.get(`beers`, {
        params: {
          page,
          per_page: 80,
          ...getters.validFilterParams
        }
      }).then((newBeers) => {
        const allBeers = [...beers, ...newBeers.data];
        if (newBeers.data.length !== 0) {
          page++;
          return getters.getTotalBeers(page, allBeers);
        }
        state.totalRows = allBeers.length

        let lastPage = state.totalRows % state.pagination.per_page ? 1 : 0;
        state.totalPages = parseInt(
          state.totalRows / state.pagination.per_page + lastPage,
          "10"
        );
      });

    },
  },

  actions: {
    async fetchBeers({ commit, state, getters },) {
      await getters.getTotalBeers()

      const response = await axios.get(`beers`, {
        params: {
          ...state.pagination,
          ...getters.validFilterParams
        }
      });
      commit('SET_BEERS', response.data);
    },
    async fetchBeerById({ commit }, id) {
      const response = await axios.get(`beers/${id}`);
      commit('SET_BEER', response.data[0]);
      console.log(response.data)
    },
  },
  mutations: {
    updateField,
    SET_BEERS: (state, beers) => {
      state.beers = beers
    },
    // SET_RANDOM_BEERS_PARAMS: (state, page) => {
    //   const per_page = page ? page : 1
    //   state.pagination = {
    //     page: 10,
    //     per_page,
    //   }
    //   state.filters = {}
    // },
    SET_BEER: (state, beer) => {

      const { name, image_url, description, brewers_tips, ingredients, method, tagline, abv } = beer
      state.beer = {
        name,
        image_url,
        description,
        brewers_tips,
        ingredients,
        method,
        tagline,
        abv
      }
    },
  },
})
