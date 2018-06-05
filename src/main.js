// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !localStorage.getItem('kdtm_token')) {
    next({path: '/signin', query: { redirect: to.fullPath }})
  } else {
    next()
  }
})

const token = localStorage.getItem('kdtm_token')
if (token) {
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = `${token}`
    return config
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
