import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Favorites from '../pages/Favorites/Favorites.vue'
import Orders from '../pages/Orders/Orders.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/orders', name: 'Orders', component: Orders },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
