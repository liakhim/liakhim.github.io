import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        layout: 'default-layout'
      }
    },
    {
      path: '/standard',
      name: 'standard',
      component: () => import('../views/Standard.vue'),
      meta: {
        layout: 'default-layout'
      }
    }
  ]
})