import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue';
import Menu from '../components/Menu.vue';
import Contact from '../components/Contact.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/menu', component: Menu }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
