// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  console.log(to.matched.some(record => record.meta.requiresAuth))
  if (to.matched.some(record => record.meta.requiresAuth) && !localStorage.getItem('kdtm_token')) {
    next({path: '/signin', query: { redirect: to.fullPath }})
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
