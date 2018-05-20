<template lang='pug'>
  .todo-list
    | {{ item.title }}
    | {{ item.limit }}
    el-button(@click="deleteConfirm(item.id)" type="primary" round)
      | delete
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
    deleteConfirm: function (id) {
      this.$confirm('This will permanently delete the item. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.deleteItem(id)
        this.$message({
          type: 'success',
          message: 'Delete completed'
        })
      })
    },
    deleteItem: function (id) {
      this.$emit('delete-item', id)
      this.dialogVisible = false
    }
  }
}
</script>