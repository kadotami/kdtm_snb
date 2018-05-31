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
          console.log(responce)
        }).catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>