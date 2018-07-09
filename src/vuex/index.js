import Vue from 'vue'
import Vuex from 'vuex'
import coinsService from '../services/coins.service.js'

Vue.use(Vuex)

const state = {
  coins: [],
  currency: (localStorage.getItem('currency')) ? localStorage.getItem('currency') : 'USD'
}

const store = new Vuex.Store({
  state,
  getters: {
    coins: (state) => {
      return state.coins
    },
    currency: (state) => {
      return state.currency
    }
  },
  actions: {
    getCoins (context, data) {
      return new Promise((resolve) => {
        coinsService.getCoins(data.currency).then(data => {
          context.commit('coins', data)
          resolve()
        })
      })
    },
    setCurrency (context, currency) {
      localStorage.setItem('currency', currency.value)
      context.commit('currency', currency.value)
    }
  },
  mutations: {
    coins (state, data) {
      state.coins = data
    },
    currency (state, data) {
      state.currency = data
    }
  }
})

export default store
