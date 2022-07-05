import { createRouter, createWebHistory  } from "vue-router"
import Home from './views/Home.vue'
import ShowDetails from './views/ShowDetails.vue'
import Search from './views/Search.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/show/:showId', component: ShowDetails },
  { path: '/search/:term', component: Search },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router;