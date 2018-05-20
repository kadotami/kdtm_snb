<template lang='pug'>
  .todo-list
    | {{ item.title }}
</template>

<script>
export default {
  name: 'todo-list',
  props: ['item'],
  methods: {
  }
}
</script>