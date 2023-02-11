import Vue from 'vue'
import VueRouter from 'vue-router'
import SuchePraktikumView from '../Views/SuchePraktikum.vue'

Vue.use(VueRouter)

const routes = [
  {
    link: '/suche',
    name: 'suchepraktikum',
    component: SuchePraktikumView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

})

export default router
