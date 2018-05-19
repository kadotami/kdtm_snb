<template>
  <div class="todo-form">
    <el-input placeholder="Title" v-model="createTitle"></el-input>
    <el-date-picker type="date" v-model="createLimit"></el-date-picker>
    <el-button @click="create(createTitle,createLimit)" type="primary" round>create</el-button>
  </div>
</template>

<script>
export default {
  name: 'todo-form',
  data () {
    return {
      createTitle: '',
      createLimit: ''
    }
  },
  methods: {
    create: function (createTitle, createLimit) {
      this.$parent.items.push({
        title: createTitle,
        limit: createLimit
      })
    }
  }
}
</script>