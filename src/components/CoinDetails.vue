<template>
  <div class="hello">
    <h1>{{ msg }} {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'CoinDetails',
  data () {
    return {
      id: this.$route.params.id,
      msg: 'Welcome to Coin Details page with ID:'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
