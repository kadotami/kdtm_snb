<template lang='pug'>
  .todo-list
    | {{ item.title }}
    | {{ item.limit }}
    el-button(@click="dialogVisible = true" type="primary" round)
      | delete
    el-dialog(title="Tips" :visible.sync="dialogVisible" width="30%")
      span Are you sure?
      span.dialog-footer(slot="footer")
      el-button(@click="dialogVisible = false") Cancel
      el-button(type="primary" @click="deleteItem(item.id)") Delete
</template>

<script>
export default {
  name: 'todo-list',
  props: {
    item: Object
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    deleteItem: function (id) {
      this.$emit('delete-item', id)
      this.dialogVisible = false
    }
  }
}
</script>