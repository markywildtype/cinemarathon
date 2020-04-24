import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/sevices/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCinemaId: null,
    selectedDate: null,
    cinemaOptions: [],
    listings: []
  },
  getters: {
    selectedCinemaId(state) {
      return state.selectedCinemaId
    },
    selectedDate(state) {
      return state.selectedDate
    },
    cinemaOptions(state) {
      return state.cinemaOptions
    },
    listings(state) {
      return state.listings
    }
  },
  mutations: {
    SET_SELECTED_CINEMA_ID(state, id) {
      state.selectedCinemaId = id
    },
    SET_SELECTED_DATE(state, date) {
      state.selectedDate = date
    },
    SET_CINEMA_OPTIONS(state, options) {
      state.cinemaOptions = options
    },
    SET_LISTINGS(state, listings) {
      state.listings = listings
    }
  },
  actions: {
    async fetchCinemaOptions({ commit }) {
      const response = await api.getCinemaOptions()
      commit('SET_CINEMA_OPTIONS', response.data)
    },
    async fetchListings({ commit, getters }) {
      const response = await api.getListings(getters.selectedCinemaId)
      commit('SET_LISTINGS', response.data.listings)
    },
    setSelectedCinemaId({ commit }, id) {
      commit('SET_SELECTED_CINEMA_ID', id)
    },
    setSelectedDate({ commit, dispatch }, date) {
      commit('SET_SELECTED_DATE', date)
      dispatch('fetchListings')
    },
    setListings({ commit }, listings) {
      commit('SET_LISTINGS', listings)
    }
  },
  modules: {}
})
