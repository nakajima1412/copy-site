import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/animation',
    name: 'Animation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "animation" */ '../views/Animation.vue'),
  },
  {
    path: '/scroll-trigger',
    name: 'ScrollTrigger',
    component: () =>
      import(/* webpackChunkName: "trigger" */ '../views/ScrollTrigger.vue'),
  },
  {
    path: '/click-trigger',
    name: 'ClickTrigger',
    component: () =>
      import(/* webpackChunkName: "trigger" */ '../views/ClickTrigger.vue'),
  },
  {
    path: '/mouse-trigger',
    name: 'MouseTrigger',
    component: () =>
      import(/* webpackChunkName: "trigger" */ '../views/MouseTrigger.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
