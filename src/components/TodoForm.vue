<template>
  <div class="todo-form">
    <el-input placeholder="Title" v-model="title"></el-input>
    <el-button @click="create" type="primary" round>create</el-button>
  </div>
</template>

<script>
export default {
  name: 'todo-form',
  data () {
    return {
      title: '',
      limit: ''
    }
  },
  methods: {
    create: function () {
      console.log('aa')
    }
  }
}
</script>