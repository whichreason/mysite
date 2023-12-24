import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login-one.vue'
import layOut from '@/views/layOut.vue'
import register from '@/views/regisTer.vue'
import listitem from '@/views/listItem.vue'
import show from '@/views/shOw.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/',
    component: layOut,
    children: [
      {
        path: '/show',
        component: show
      },
      {
        path: '/listitem',
        component: listitem

      }

    ]

  },
  {
    path: '/register',
    component: register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
