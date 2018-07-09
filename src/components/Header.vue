<template>
  <b-navbar toggleable="md" variant="light" type="light">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">COINS</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/" exact>
            Home
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/coins" exact>
            Coins
          </router-link>
        </b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown :text="currency" right>
        <b-dropdown-item @click="setCurrency('USD')">USD</b-dropdown-item>
        <b-dropdown-item @click="setCurrency('EUR')">EUR</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapGetters(['currency'])
  },
  methods: {
    ...mapActions({
      setCurrency: 'setCurrency'
    }),
    setCurrency (value) {
      this.$store.dispatch('setCurrency', {value}).then(() => {
        console.log('Coins', this.$store.currency)
      })
    }
  }
}
</script>
