import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
      component: Todo
    }
  ]
})
