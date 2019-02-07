<template lang='pug'>
  .todo-list
    span.title {{ item.title }}
    span.limit {{ item.limit }}
    el-button(@click="deleteConfirm(item.id)" type="primary" round)
      | delete
</template>

<script>
import { deleteTodo } from '../utils/todos-api'
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
    deleteConfirm (id) {
      this.$confirm('This will permanently delete the item. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.deleteItem(id)
      })
    },
    deleteItem (id) {
      deleteTodo(id).then((response) => {
        this.deleteEmit(id)
        this.$message({
          type: 'success',
          message: 'Delete completed'
        })
      }).catch((error) => {
        console.log(error)
      })
    },
    deleteEmit (id) {
      this.$emit('delete-item', id)
      this.dialogVisible = false
    }
  }
}
</script>