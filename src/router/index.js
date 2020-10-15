import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeChildrenRoute from './HomeChildren'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: HomeChildrenRoute
  }
]

const router = new VueRouter({
  routes
})

export default router
