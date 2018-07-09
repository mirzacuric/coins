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
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>
