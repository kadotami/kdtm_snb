<template lang='pug'>
  .todo-list
    | {{ item.title }}
    | {{ item.limit }}
    el-button(@click="deleteConfirm(item.id)" type="primary" round)
      | delete
</template>

<script>
import axios from 'axios'
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
      axios.delete(process.env.API_URI + '/todos/' + id, {
      }).then((response) => {
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