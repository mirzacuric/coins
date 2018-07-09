<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import coinsService from '../services/coins.service.js'
export default {
  name: 'Coins',
  data () {
    return {
      currency: this.$route.query && this.$route.query.currency ? this.$route.query.currency : 'USD',
      msg: 'Welcome to Coins page',
      coins: []
    }
  },
  methods: {
    loadCoins () {
      console.log('init', this.$route)
      coinsService.getCoins(this.currency).then(data => {
        console.log(data)
        this.coins = data
      })
    }
  },
  watch: {
    '$route' (to, from) {
      this.currency = to.params.currency
      this.loadCoins()
    }
  },
  created () {
    this.loadCoins(this.currency)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
