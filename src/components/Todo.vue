<template>
  <div class="todo">
    <h1>TodoList</h1>
    <todo-form></todo-form>
  </div>
</template>

<script>
import TodoForm from './TodoForm.vue'
export default {
  name: 'todo',
  data () {
    return {
      msg: process.env.NODE_ENV
    }
  },
  methods: {
    create: function () {
      console.log('aa')
    }
  },
  components: {
    TodoForm
  }
}
</script>