import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import Coins from '@/components/Coins'
// import CoinDetails from '@/components/CoinDetails'
// import NotFound from '@/components/NotFound'

const Home = () => import('@/components/Home')
const Coins = () => import('@/components/Coins')
const CoinDetails = () => import('@/components/CoinDetails')
const NotFound = () => import('@/components/NotFound')

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({
    y: 0,
    x: 0
  }),
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/coins',
    name: 'Coins',
    component: Coins
  }, {
    path: '/coin/:id',
    name: 'CoinDetails',
    component: CoinDetails
  }, {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }]
})
