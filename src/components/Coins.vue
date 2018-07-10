<template>
  <b-table id="coins" striped hover :items="items" :fields="fields"></b-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Coins',
  computed: {
    ...mapGetters(['coins', 'currency'])
  },
  data () {
    return {
      fields: this.currency ? ['rank', 'name', 'symbol', 'price_USD', this.getSelectedCurrencyColumn().name] : [],
      items: []
    }
  },
  methods: {
    ...mapActions({
      getCoins: 'loadCoins'
    }),
    loadCoins (currency) {
      this.items = []
      this.$store.dispatch('getCoins', {currency}).then(() => {
        this.$store.state.coins.map((coin, index) => {
          this.items.push({rank: coin.rank, name: coin.name, symbol: coin.symbol, price_USD: coin.price_usd, [this.getSelectedCurrencyColumn().name]: coin[this.getSelectedCurrencyColumn().value]})
        })
      })
    },
    getSelectedCurrencyColumn () {
      return {
        name: 'price_' + this.currency,
        value: 'price_' + this.currency.toLowerCase()
      }
    }
  },
  watch: {
    'currency' (to, from) {
      console.log('currency', this.currency)
      this.loadCoins(this.currency)
    }
  },
  created () {
    this.loadCoins(this.currency)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 table {
   margin-top: 2rem
 }
</style>
