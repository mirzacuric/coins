
<template>
  <div id="app">
    <app-header></app-header>
    <img src="../assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './Header.vue'
export default {
  components: {
    'app-header': AppHeader
  },
  name: 'Layout'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
