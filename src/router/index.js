import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Beer from '../views/Beer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/beer-info',
    name: 'beer-info',
    component: Beer,
    props: true,
  },
  {
    path: '*',
    component: Home
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
