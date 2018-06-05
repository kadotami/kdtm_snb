<template>
  <div id="app">
    <header>
      <span>kdtm snb</span>
      <router-link v-bind:to="{ name : 'Signin'}">Signin</router-link>
      <router-link v-bind:to="{ name : 'Signout'}">Signout</router-link>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import router from './router'
export default {
  name: 'app',
  data () {
    return {
      isLogin: false
    }
  },
  created: function () {
    axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.response.status === 401) {
          localStorage.removeItem('kdtm_token')
          router.push('signin')
        }
        throw err
      })
    })
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
