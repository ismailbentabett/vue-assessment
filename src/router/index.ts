import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Contacts from '@/views/Contacts.view.vue'
import Contact from '@/views/Contact.view.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/contact/:id',
    name: 'Contact',
    component: Contact
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
