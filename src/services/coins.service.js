import axios from 'axios'

axios.defaults.baseURL = 'https://api.coinmarketcap.com/v1/ticker'

const coinsService = {
  getCoins (currency) {
    return new Promise((resolve, reject) => {
      axios.get(`?convert=${currency}`).then(response => {
        resolve(response.data)
      })
    })
  }
}

export default coinsService
