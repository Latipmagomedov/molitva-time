import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchResult from "../views/SearchResult.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search-result",
    name: "SearchResult",
    component: SearchResult,
  },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
