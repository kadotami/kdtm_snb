<template lang='pug'>
  .todo-form
    el-input(placeholder="Title" v-model="createTitle")
    el-date-picker(type="datetime" v-model="createLimit" placeholder="limit")
    el-button(@click="create(createTitle,createLimit)" type="primary" round)
      | create
</template>

<script>
import axios from 'axios'
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
      if (createTitle !== '' && createLimit !== '') {
        axios.post(process.env.API_URI + '/todos', {
          todo: {
            title: this.createTitle,
            limit: this.createLimit
          }
        }).then(function (response) {
          this.$emit('create-item', response.data)
          this.createTitle = ''
          this.createLimit = ''
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
}
</script>