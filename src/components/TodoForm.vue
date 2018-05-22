<template lang='pug'>
  .todo-form
    el-input(placeholder="Title" v-model="createTitle")
    el-date-picker(type="datetime" v-model="createLimit" placeholder="limit")
    el-button(@click="create(createTitle,createLimit)" type="primary" round)
      | create
</template>

<script>
import { createTodo } from '../utils/todos-api'
export default {
  name: 'todo-form',
  data () {
    return {
      createTitle: '',
      createLimit: ''
    }
  },
  methods: {
    create (createTitle, createLimit) {
      if (createTitle !== '' && createLimit !== '') {
        createTodo({
          todo: {
            title: this.createTitle,
            limit: this.createLimit
          }
        }).then((responce) => {
          this.$emit('create-item', responce.data)
          this.createTitle = ''
          this.createLimit = ''
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
}
</script>