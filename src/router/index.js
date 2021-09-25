import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Person from '../views/Person'
import Background from '../views/Background'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: { title: 'TOP' }
  },
  {
    path: '/person',
    name: 'Person',
    component: Person,
    props: { title: '人物' }
  },
  {
    path: '/background',
    name: 'Background',
    component: Background,
    props: { title: '経歴' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
