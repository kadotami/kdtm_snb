<template lang="pug">
  .signin
    h1 
      | Sign in
    el-input(placeholder="UserName" v-model="username")
    el-input(placeholder="Password" type="Password" v-model="password")
    el-button(type="primary" round)
      | Primary
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>