import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CognitivoView from '../views/CognitivoView.vue'
import VisualView from '../views/VisualView.vue'
import AuditivoView from '../views/AuditivoView.vue'
import BajaVisionView from '../views/BajaVisionView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/motrizview',
    name: 'MotrizView',
    component: () => import(/* webpackChunkName: "about" */ '../views/MotrizView.vue')
  },
  {
    path: '/cognitivoview',
    name: 'CognitivoView',
    component: CognitivoView
  },
  {
    path: '/visualview',
    name: 'VisualView',
    component: VisualView
  },
  {
    path: '/auditivoview',
    name: 'AuditivoView',
    component: AuditivoView
  },
  {
    path: '/bajavisionview',
    name: 'BajaVisionView',
    component: BajaVisionView
  },
  {
    path: '/aboutview',
    name: 'AboutView',
    component: AboutView
  }
]

const router = new VueRouter({
  routes
})

export default router
