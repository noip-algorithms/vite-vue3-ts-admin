import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: Home},
  { path: '/home', redirect: '/'},
  { path: '/about', name: 'about', component: () => import('@/views/About.vue')},
  { path: '/login', name: 'login', component: () => import('@/views/login/Login.vue')},
  { path: '/:catchAll(.*)', name: 'error', component: () => import('@/views/Error.vue')}
]

export default routes