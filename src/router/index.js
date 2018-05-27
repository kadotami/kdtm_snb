import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import Todo from '@/components/Todo'
import AccountBook from '@/components/AccountBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: {requiresAuth: true}
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
      meta: {requiresAuth: true}
    },
    {
      path: '/account-book',
      name: 'AccountBook',
      component: AccountBook,
      meta: {requiresAuth: true}
    }
  ]
})
