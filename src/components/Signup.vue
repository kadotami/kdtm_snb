<template lang="pug">
  .signin
    h1
      | Sign in
    el-input(placeholder="Name" v-model="name")
    el-input(placeholder="Email" v-model="email")
    el-input(placeholder="Password" type="Password" v-model="password")
    el-input(placeholder="PasswordConfirm" type="Password" v-model="passwordConfirmation")
    el-button(@click="signUp" type="primary" round)
      | Primary
</template>

<script>
import axios from 'axios'
export default {
  name: 'signin',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  },
  methods: {
    signUp: function () {
      axios.post(process.env.API_URI + '/users', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>