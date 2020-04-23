import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Planner from '@/views/Planner.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listings',
    name: 'listings',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Listings.vue')
  },
  {
    path: '/planner',
    name: 'planner',
    component: Planner
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
