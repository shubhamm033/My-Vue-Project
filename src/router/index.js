import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Autocomplete from '@/components/Autocomplete'
import Dashboard from '@/components/Dashboard'
import Users from '@/components/Users'
import Tables from '@/components/Tables'
import Login from '@/components/Login'
import ItemEntry from '@/components/ItemEntry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/practice',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/',
          redirect : "/login",
          },
        {
          path: '/users',
          name: 'Users',
          component: Users
          },
        {
          path: '/tables',
          name: 'Tables',
          component: Tables
          },
        {
          path: '/itementry',
          name: 'ItemEntry',
          component: ItemEntry
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '**',
      redirect: '/login'
    }
  ]
})