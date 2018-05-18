<template>
  <div class="signin">
    <h1>Sign in</h1>
    <el-input placeholder="UserName" v-model="username"></el-input>
    <el-input placeholder="Password" type="Password" v-model="password"></el-input>
    <el-button type="primary" round>Primary</el-button>
  </div>
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