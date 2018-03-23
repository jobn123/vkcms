import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Admin from '@/components/admin'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
