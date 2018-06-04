<template lang="pug">
  .signin
    h1 
      | Sign in
    el-input(placeholder="email" v-model="email")
    el-input(placeholder="Password" type="Password" v-model="password")
    el-button(@click="signin()" type="primary" round)
      | Primary
</template>

<script>
import { signinApi } from '../utils/users-api'
import router from '../router'
export default {
  name: 'signin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin () {
      let obj = {
        email: this.email,
        password: this.password
      }
      signinApi(obj)
        .then((responce) => {
          console.log(responce.token)
          localStorage.setItem('kdtm_token', responce.token)
          if (this.$route.query.redirect) {
            router.push(this.$route.query.redirect)
          } else {
            router.push('Hello')
          }
        }).catch((error) => {
          console.log(error.response.status)
          this.$message({
            type: 'error',
            message: 'password or email is not correct'
          })
        })
    }
  }
}
</script>